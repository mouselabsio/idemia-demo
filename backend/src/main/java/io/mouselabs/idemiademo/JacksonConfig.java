package io.mouselabs.idemiademo;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import static com.fasterxml.jackson.databind.SerializationFeature.WRITE_DATES_AS_TIMESTAMPS;

@Configuration
public class JacksonConfig {

    @Bean
    @Primary
    public ObjectMapper springObjectMapper() {
        return new ObjectMapper() {{
            registerModule(new JavaTimeModule());
            configure(WRITE_DATES_AS_TIMESTAMPS, false);

            /*
             * Using fields only - no need to annotate each field NOR create getter/setter
             * in order to facilitate jackson ser/deser.
             *
             * Any fields that should be skipped wrt ser/deser may be annotated with @JsonIgnore.
             * (if this strategy becomes messy, we can set FAIL_ON_UNKNOWN_PROPERTIES to false)
             */
            setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.NONE);
            setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        }};
    }
}