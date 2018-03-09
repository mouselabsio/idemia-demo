package io.mouselabs.idemiademo.controller;

import org.assertj.core.util.VisibleForTesting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletResponse;

import io.mouselabs.idemiademo.db.UserRecord;
import io.mouselabs.idemiademo.db.UserRecordRepository;

import static javax.servlet.http.HttpServletResponse.SC_BAD_REQUEST;
import static javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController
@RequestMapping("/idemia/v1/users/records")
@ResponseBody
/* 
    Notes: Through the app except for a single case (in JacksonConfig) I'm using multi-line comments 
    for "notes to the reviewer", and regular code comments/javadoc where I would normally leave them 
    in production code
    
    There are lots of tasks left incomplete in order to stay within expected time limits - I've 
    called out (hopefully) all of those with these comments
    
    Both the client app and the backend should support PUT operations to replace existing records -
    I've just hacked that into this by having the DAO truncate and re-writing existing files when 
    found
 */
public class UserRecordController {

    @Autowired private UserRecordRepository repository;
    private static final String RECORDS_URL = "/idemia/v1/users/records";

    /**
     * @param action optional query parameter that specifies whether the user should (continue to)
     *               receive non-cached record lists
     * @return a List of UserRecord instances
     */
    @GetMapping(produces = APPLICATION_JSON_UTF8_VALUE)
    /* This single API consolidates both the "refreshed" and "cached" versions of the specified get-user-records APIs */
    public ResponseEntity<List<UserRecordViewModel>> userRecords(
            @RequestParam(value = "action", defaultValue = "none") String action,
            HttpServletResponse res) {
        if (action.equalsIgnoreCase("refresh")) { // break browser cache
            Random r = new Random();
            try {
                res.setStatus(FOUND.value());
                res.sendRedirect(RECORDS_URL + "?" + r.nextLong());
            } catch (IOException e) {
                /* add logging and handling */
                return null;
            }
            return null;
        }

        List<UserRecord> records = repository.getUserRecords();
        if (!ObjectUtils.isEmpty(records))
            return ResponseEntity
                    .ok()
                    .cacheControl(CacheControl.maxAge(1, TimeUnit.HOURS))
                    .body(UserRecordViewModel.getViewModelsFromRecords(records));

        return new ResponseEntity<>(NO_CONTENT);
    }

    /**
     * @param payload The request payload deserialized into a UserRecordViewModel instance
     * @return UserRecord A representation of the newly created entry
     */
    @PostMapping(consumes = APPLICATION_JSON_UTF8_VALUE, produces = APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<UserRecordViewModel> userRecord(@RequestBody UserRecordViewModel payload, HttpServletResponse res) throws IOException {
        if (!validRequestPayload(payload, res)) return null;

        if (repository.addUserRecord(UserRecordViewModel.getUserRecord(payload)))
            return ResponseEntity.status(CREATED).body(payload);

        /* See to-do in addUserRecord() re: optional error handling strategies */
        res.sendError(SC_INTERNAL_SERVER_ERROR, "An error occurred");

        return null;
    }

    @VisibleForTesting
    boolean validRequestPayload(UserRecordViewModel payload, HttpServletResponse res) throws IOException {
        /* In real life we might want to list all submission errors instead of bailing out on the first */

        // attempt to pass uuid in request is forbidden
        if (Objects.nonNull(payload.uuid)) {
            res.sendError(SC_BAD_REQUEST, "Passing an id in the request is not allowed");
            return false;
        }

        // username required 
        if (StringUtils.isEmpty(payload.username)) {
            res.sendError(SC_BAD_REQUEST, "A username must be provided");
            return false;
        }

        // DOB required 
        if (payload.dob == null) {
            res.sendError(SC_BAD_REQUEST, "A date of birth must be provided");
            return false;
        }

        return true;
    }
}