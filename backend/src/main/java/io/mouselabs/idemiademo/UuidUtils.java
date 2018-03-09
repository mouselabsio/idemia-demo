package io.mouselabs.idemiademo;

import java.util.UUID;

public class UuidUtils {
    public static boolean isUuid(String str) {
        return safeFromString(str) != null;
    }

    private static UUID safeFromString(String str) {
        if (str == null) return null;
        try {
            return UUID.fromString(str);
        } catch (IllegalArgumentException e) {
            return null;
        }
    }
}