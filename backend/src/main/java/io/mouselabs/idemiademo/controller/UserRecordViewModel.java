package io.mouselabs.idemiademo.controller;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import org.assertj.core.util.VisibleForTesting;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import io.mouselabs.idemiademo.db.UserRecord;

@JsonPropertyOrder(alphabetic = true)
@JsonDeserialize(builder = UserRecordViewModel.Builder.class)
public class UserRecordViewModel {

    @JsonProperty("DOB") LocalDate dob;
    @JsonProperty String description;
    @JsonProperty UUID uuid;
    @JsonProperty String username;

    // instantiation restricted to Builder
    private UserRecordViewModel(UserRecordViewModel.Builder b) {
        dob = b.dob;
        description = b.description;
        username = b.username;
        uuid = b.uuid;
    }

    public static List<UserRecordViewModel> getViewModelsFromRecords(List<UserRecord> records) {
        List<UserRecordViewModel> vms = new ArrayList<>();
        for (UserRecord record : records)
            vms.add(newBuilder().desc(record.getDesc()).dob(record.getDob()).username(record.getUsername()).uuid(record.getUuid()).build());

        return vms;
    }

    public static UserRecord getUserRecord(UserRecordViewModel vm) {
        return UserRecord.newBuilder().desc(vm.description).dob(vm.dob).userName(vm.username).build();
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    // package access required by jackson for JsonDeserialize
    @SuppressWarnings("UnusedReturnValue")
    @VisibleForTesting
    static final class Builder {

        @JsonProperty("DOB") LocalDate dob;
        @JsonProperty String description;
        @JsonProperty String username;
        @JsonProperty UUID uuid;

        Builder desc(String desc) {
            description = desc;
            return this;
        }

        Builder dob(LocalDate dob) {
            this.dob = dob;
            return this;
        }

        Builder username(String username) {
            this.username = username;
            return this;
        }

        Builder uuid(UUID uuid) {
            this.uuid = uuid;
            return this;
        }

        // even though we check for valid request payloads in the controller, the builder should
        // check for invariants as well
        UserRecordViewModel build() {

            // username required 
            if (StringUtils.isEmpty(username))
                throw new IllegalArgumentException("username must be specified");

            // DOB required 
            if (dob == null)
                throw new IllegalArgumentException("DOB must be specified");

            return new UserRecordViewModel(this);
        }
    }

    public static void main(String[] args) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

        String date = "08/12/2016";

//convert String to LocalDate
        LocalDate localDate = LocalDate.parse(date, formatter);
        System.out.println(localDate);
    }
}