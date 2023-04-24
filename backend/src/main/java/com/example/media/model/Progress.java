package com.example.media.model;

import java.util.Optional;

public record Progress(Optional<Integer> progress, boolean completed) {
}
