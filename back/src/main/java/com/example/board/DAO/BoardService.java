package com.example.board.DAO;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.board.VO.BoardVO;
import com.example.board.mapper.BoardMapper;

@MapperScan(value= {"com.example.board.mapper"})
@Service
public class BoardService {
	private BoardMapper boardMapper;
	
	public BoardService(BoardMapper boardMapper) {
		this.boardMapper = boardMapper;
	}
	
	public List<BoardVO> getBoardList() {
			List<BoardVO> list = boardMapper.getBoardList();
		
		return list;
	}

	public void insert(BoardVO vo) {
		boardMapper.insert(vo);
		return;
	}

}
