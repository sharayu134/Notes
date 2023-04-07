package com.finzly.bankos.workflow.forms.accountopening;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.time.format.DateTimeFormatter;

import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.finzly.bankos.workflow.forms.model.BusinessType;
import com.finzly.bankos.workflow.forms.model.Constants;
import com.finzly.bankos.workflow.forms.notification.NotificationServiceTask;

public class LinkedList {

	public static void main(String[] args) throws JsonMappingException, JsonProcessingException {
//		Node head = new Node(2,null);
//		head.next = new Node(4,new Node(5,null));
//		Node n = new Node(6,new Node(7,null));
//		
//		//insert at end
//		Node temp = head; 
//		while(temp.next!=null) {
//			temp = temp.next;			
//		}
//		temp.next = new Node(8,null);
//		
//		
//		temp = temp.next;
//		temp.next = n; 
//		System.out.println(head);
//		
//		//insert after 8 inset666
//		Node temp1 = new Node();
//		temp = head; 
//		while(temp.next!=null) {
//			temp = temp.next;	
//			if(temp.val == 8) {
//				temp1 = temp.next;
//				temp.next = new Node(666, temp1);
//				
//			}
//		}
//		
//		//delete 666
//		temp = head;
//		while(temp.next!=null) {
//			temp = temp.next;	
//			if(temp.next!=null) {
//				if(temp.next.val == 7) {
//					if(temp.next.next!=null) {
//						temp.next = temp.next.next;
//					}else {
//						temp.next=null;
//					}
//				}
//			}
//			
//		}
//		System.out.println(head);
		
		Node head = new Node(2,null);
		head.prev = null;
		head.next = new Node(4,new Node(5,null));
		Node n = new Node(6,new Node(7,null));
		
		Node temp = head; 
		while(temp.next!=null) {
			temp = temp.next;			
		}
		temp.next = new Node(8,null);
		
		
		temp = temp.next;
		temp.next = n; 
		System.out.println(head);
		
		//insert after 8 inset666
		Node temp1 = new Node();
		temp = head; 
		while(temp.next!=null) {
			temp = temp.next;	
			if(temp.val == 8) {
				temp1 = temp.next;
				temp.next = new Node(666, temp1);
				
			}
		}
		
		//delete 666
		temp = head;
		while(temp.next!=null) {
			temp1= temp;
			temp = temp.next;	
			temp.prev = temp1;
			
		}
		
		//insert after 8 88899
		temp1 = new Node();
		temp = head; 
		Node a = new Node();
		a.val =88899;
		while(temp.next!=null) {
			temp = temp.next;	
			if(temp.val == 8) {
				a.prev = temp;
				if(temp.next!=null) {
					a.next = temp.next;
					temp.next.prev = a;
				}
				temp.next = a;
			}
		}
		System.out.println(head);
		
		
		
	}
}
class Node{
	public int val;
	public Node next;
	public Node prev;
	Node(int val, Node next){
		this.val= val ;
		this.next=next;
	}
	Node(){}
	int getVal(){
		return this.val;
	}
	Node getNext(){
		return this.next;
	}
	void setVal(int val) {
		this.val = val;
	}
	void setNext(Node next) {
		this.next = next;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Node [val=").append(val).append(", next=").append(next).append(", prev=").append(prev)
				.append("]");
		return builder.toString();
	}


}
