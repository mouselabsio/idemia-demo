package io.mouselabs.idemiademo.db;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import static java.nio.file.StandardOpenOption.TRUNCATE_EXISTING;

@Component
public class FileRepository implements UserRecordRepository {

    @Autowired private ObjectMapper objectMapper;

    private static final String DIRECTORY_NAME = "userrecords";
    private static final String JSON_FILE_EXT = ".json";
    private Path directory = Paths.get(System.getProperty("user.home"), DIRECTORY_NAME);

    @Override
    public List<UserRecord> getUserRecords() {
        List<UserRecord> records = new ArrayList<>();
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(directory, path -> path.toFile().isFile() && path.toString().toLowerCase().endsWith(JSON_FILE_EXT))) {
            for (Path file : stream)
                records.add(objectMapper.readValue(Files.readAllBytes(file), UserRecord.class));
        } catch (IOException e) {
            /* add logging and handling */
        }

        return records;
    }

    @Override
    public boolean addUserRecord(UserRecord record) {
        try {
            Files.createDirectories(directory);
            Path file = Paths.get(directory + "/" + record.getUuid().toString() + ".json");
            Files.createFile(file);
            Files.write(file, objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(record).getBytes(), TRUNCATE_EXISTING);
        } catch (IOException e) {
            /*
             * Add logging, possibly rethrow a custom app exception to be caught by Spring error
             * handling, returning an appropriate message to the client
             */
            return false;
        }

        return true;
    }

}