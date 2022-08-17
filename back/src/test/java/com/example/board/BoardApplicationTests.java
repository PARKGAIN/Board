package com.example.board;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.board.mapper.BoardMapper;

@SpringBootTest
class BoardApplicationTests {

	 @Autowired
	    private BoardMapper boardMapper;

	    @Test
	    public void testGetTime() {
	       
	    	
	    	       System.out.println("getTime");
	    	        System.out.println("getTime: " + boardMapper.getTime());
	    	    
	    }
	    
}
