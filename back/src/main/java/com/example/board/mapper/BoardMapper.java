package com.example.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.board.VO.BoardVO;

@Mapper
public interface BoardMapper {
	 @Select("select sysdate from dual")
	    public String getTime();
	 
	 @Select("select * from board")
	 public List<BoardVO> getBoardList();
	 
	 @Insert("insert into board	 (btitle,content) values (#{btitle, jdbcType=VARCHAR},#{content, jdbcType=VARCHAR})")
	  public void insert(BoardVO vo);
	 
}
