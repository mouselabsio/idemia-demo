package io.mouselabs.idemiademo.db;

import java.util.List;

public interface UserRecordRepository {

    List<UserRecord> getUserRecords();

    boolean addUserRecord(UserRecord record);

}