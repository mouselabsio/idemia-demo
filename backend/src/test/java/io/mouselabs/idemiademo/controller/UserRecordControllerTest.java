package io.mouselabs.idemiademo.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.javafaker.DateAndTime;
import com.github.javafaker.Faker;
import com.github.javafaker.HarryPotter;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import io.mouselabs.idemiademo.WebTest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

/* This class is a mix of unit and intg tests - in real life I'd break these out */ 
public class UserRecordControllerTest extends WebTest {

    private static final String BASE_URL = "/idemia/v1/users/records";

    @Mock private HttpServletResponse mockRes;

    @Autowired private ObjectMapper mapper;
    @Autowired private TestRestTemplate restTemplate;

    private DateAndTime dateFaker;
    private HarryPotter harryPotterFaker;
    private String payload;

    @Before
    public void setup() {
        Faker faker = new Faker();
        dateFaker = faker.date();
        harryPotterFaker = faker.harryPotter();
        payload = "{" +
                "\"description\" : " + "\"" + harryPotterFaker.quote() + "\",\n" +
                "\"username\" : " + "\"" + harryPotterFaker.character() + "\",\n" +
                "\"DOB\" : " + "\"" + getLocalDate() + "\"\n" +
                "}";
    }

    @Test
    public void valid_cache_headers_returned() {
        ResponseEntity<List<UserRecordViewModel>> response = restTemplate
                .exchange(BASE_URL, GET, null, new ParameterizedTypeReference<List<UserRecordViewModel>>() {});
        assertEquals(OK, response.getStatusCode());
        assertEquals("max-age=3600", response.getHeaders().getCacheControl());
    }

    @Test
    public void get_user_records() {
        // make sure we have at least one persisted record
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        restTemplate.exchange(BASE_URL, POST, new HttpEntity<>(payload, headers), UserRecordViewModel.class);

        ResponseEntity<List<UserRecordViewModel>> response = restTemplate
                .exchange(BASE_URL, GET, null, new ParameterizedTypeReference<List<UserRecordViewModel>>() {});
        assertEquals(OK, response.getStatusCode());
        /* This is quick-n-dirty for the exercise - in real life I'd add functionality to drop the
         * data store, create specific records, and check the response for exactly those records */
        assertTrue(response.getBody() != null && response.getBody().size() > 0);
    }

    @Test
    public void post_user_record() throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        ResponseEntity<UserRecordViewModel> response = restTemplate
                .exchange(BASE_URL, POST, new HttpEntity<>(payload, headers), UserRecordViewModel.class);

        assertEquals(CREATED, response.getStatusCode());
        // if POST was successful we should get back the same rep we posted
        UserRecordViewModel responseVM = response.getBody();
        UserRecordViewModel payloadVM = mapper.readValue(payload, UserRecordViewModel.class);
        assertEquals(payloadVM.description, responseVM.description);
        assertEquals(payloadVM.dob, responseVM.dob);
        assertEquals(payloadVM.username, responseVM.username);
    }

    @Test
    public void request_payload_is_valid() throws IOException {
        UserRecordController c = new UserRecordController();
        UserRecordViewModel.Builder b = UserRecordViewModel.newBuilder();
        b.username(harryPotterFaker.character());
        b.dob(getLocalDate());
        b.desc("I remind people of " + harryPotterFaker.character());
        UserRecordViewModel payload = b.build();

        // uuid set - invalid request
        payload.uuid = UUID.randomUUID();
        assertFalse(c.validRequestPayload(payload, mockRes));

        // no uuid set - valid request
        payload.uuid = null;
        assertTrue(c.validRequestPayload(payload, mockRes));

        // no DOB - invalid request 
        payload.dob = null;
        assertFalse(c.validRequestPayload(payload, mockRes));

        // no username - invalid request  
        payload.dob = getLocalDate();
        payload.username = "";
        assertFalse(c.validRequestPayload(payload, mockRes));
    }

    private LocalDate getLocalDate() {
        return LocalDate.from(dateFaker.birthday().toInstant().atZone(ZoneId.systemDefault()));
    }
}