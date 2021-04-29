package mk.ukim.finki.emt.lab.service;

import mk.ukim.finki.emt.lab.model.Author;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    List<Author> findAll();

    Optional<Author> findById(Long id);

    void deleteById(Long id);
}
