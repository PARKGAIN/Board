package com.example.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.board.VO.BoardVO;

@Mapper
public interface BoardMapper {
	 @Select("select sysdate from dual")
	    public String getTime();
	 
	 @Select("select * from board")
	 public List<BoardVO> getBoardList();
	 
	 @Insert("insert into board	 (btitle,content) values (#{btitle, jdbcType=VARCHAR},#{content, jdbcType=VARCHAR})")
	  public void insert(BoardVO vo);
	 
	 @Update("UPDATE BOARD SET BTITLE = #{btitle}, CONTENT = #{content} WHERE ID = #{id}")
	 public void update(int id);
	 
	 @Delete("Delete from board where ")
	 public void delete();
	 
	 @Select("select btitle,content from board where id=#{id}")
	 public List<BoardVO> getPost(int id);
	 
	 @Delete("delete from board where id=#{id}")
	 public void delData(int id);
	 
}
