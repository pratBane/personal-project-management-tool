package in.pratbane.ppmapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import in.pratbane.ppmapi.domain.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
	
	//TODO : No need to implement methods
	Project findByProjectIdentifier(String projectIdentifier);

}
