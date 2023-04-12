package avaliacaon1.com.br.project.resource;

import java.net.URI;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.HttpStatus;

import avaliacaon1.com.br.project.model.Departamento;
import avaliacaon1.com.br.project.repository.DepartamentoRepository;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/departamento")
public class DepartamentoResource {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @GetMapping
    public List<Departamento> list() {
        return departamentoRepository.findAll();
    }

    @GetMapping("/{id}")
	public Optional<Departamento> findById(@PathVariable Long id) {
		return departamentoRepository.findById(id);
	}

    @PostMapping
    public ResponseEntity<Departamento> create(@Valid @RequestBody Departamento Departamento,
            HttpServletResponse response) {
        Departamento save = departamentoRepository.save(Departamento);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId())
                .toUri();

        return ResponseEntity.created(uri).body(save);
    }


    @DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		departamentoRepository.deleteById(id);
		// Desafio - Retornar corretamente o Status
	}

    @PutMapping("/{id}")
	public ResponseEntity<Departamento> update(@PathVariable Long id, @Valid @RequestBody Departamento Departamento) {
		Optional<Departamento> departamentoBanco = departamentoRepository.findById(id);
		BeanUtils.copyProperties(Departamento, departamentoBanco.get(), "id");
		departamentoRepository.save(departamentoBanco.get());
		return ResponseEntity.ok(Departamento);
	}

}
