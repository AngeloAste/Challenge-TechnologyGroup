package com.technologygroup.challenge.repository;

import com.technologygroup.challenge.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findAllByOrderByCreatedAtDesc();

    List<Post> findByNameContainingIgnoreCaseOrderByCreatedAtDesc(String name);
}
