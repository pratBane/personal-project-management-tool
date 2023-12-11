package in.pratbane.ppmapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.pratbane.ppmapi.domain.ProjectTask;
@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
	
	ProjectTask findByProjectSequence(String projectSequence);

}
