package com.example.board.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.util.http.parser.MediaType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.board.DAO.BoardService;
import com.example.board.VO.BoardVO;

@RestController
public class BoardController {

	private static final Logger log = LoggerFactory.getLogger(BoardController.class);
	
	
	//DI 의존성 주입 생성자 메서드 주입방식(bean으로 등록 되어 있기 때문에 가능한 방법)
	private BoardService boardService;
	
	public BoardController(BoardService boardService) {
		this.boardService = boardService;
	}
	
	@GetMapping("/list")
	public List<BoardVO> getBoardList() {
		
		return boardService.getBoardList();
	}
	
	@RequestMapping(value="/posts/post", method=RequestMethod.POST, consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
	public void insert(@RequestBody BoardVO vo){
		 boardService.insert(vo);
		 return;
	}
	
	@RequestMapping(value="/posts/post", method=RequestMethod.POST, consumes = org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public void insertMola(BoardVO vo){
		 boardService.insert(vo);
		 return;
	}
	
	@RequestMapping(value="/posts/put")
	public void updateData() {
		
	}
	
	@GetMapping(value="/detail/get")
	public List<BoardVO> getPost(@PathVariable("id") int id) {
		
		return boardService.getPost(id);
	}
	
	

}
