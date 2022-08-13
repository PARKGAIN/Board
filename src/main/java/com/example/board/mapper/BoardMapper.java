package com.example.board.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BoardMapper {
	 @Select("select sysdate from dual")
	    public String getTime();
}
