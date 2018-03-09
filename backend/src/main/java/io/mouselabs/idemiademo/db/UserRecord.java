package io.mouselabs.idemiademo.db;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import org.assertj.core.util.VisibleForTesting;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.util.UUID;

import io.mouselabs.idemiademo.UuidUtils;


@JsonPropertyOrder(alphabetic = true)
@JsonDeserialize(builder = UserRecord.Builder.class)
public class UserRecord {

    @JsonProperty("DOB") private LocalDate dob;
    private String description;
    private UUID uuid;
    private String username;

    // instantiation constrained to Builder
    private UserRecord(UserRecord.Builder b) {
        dob = b.dob;
        description = b.description;
        username = b.username;
        uuid = b.uuid;
    }

    public String getDesc() {
        return description;
    }

    public LocalDate getDob() {
        return dob;
    }

    public String getUsername() {
        return username;
    }

    public UUID getUuid() {
        return uuid;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    // package access required by jackson for JsonDeserialize
    @VisibleForTesting
    public static final class Builder {

        @JsonProperty("DOB") LocalDate dob;
        String description;
        String username;
        UUID uuid;

        private Builder() {
            uuid = UUID.randomUUID();
            System.out.println("");
        }

        public Builder desc(String desc) {
            this.description = desc;
            return this;
        }

        public Builder dob(LocalDate dob) {
            this.dob = dob;
            return this;
        }

        public Builder userName(String userName) {
            this.username = userName;
            return this;
        }

        public Builder uuid(UUID uuid) {
            this.uuid = uuid;
            return this;
        }

        // even though we check for valid request payloads in the controller, this builder must also
        // guarantee invariants since one of its jobs is to deserialize persisted data into UserRecord
        // instances
        public UserRecord build() {
            if (uuid == null || !UuidUtils.isUuid(uuid.toString())) {
                throw new IllegalArgumentException("userrecord must be constructed with a uuid");
            }

            // username required 
            if (StringUtils.isEmpty(username))
                throw new IllegalArgumentException("username must be specified");

            // DOB required 
            if (dob == null)
                throw new IllegalArgumentException("DOB must be specified");

            return new UserRecord(this);
        }
    }
}