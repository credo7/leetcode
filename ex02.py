# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        s1,s2 = '', ''
        while l1:
            s1 = str(l1.val) + s1
            l1 = l1.next
        while l2:
            s2 = str(l2.val) + s2
            l2 = l2.next
        if not s1: s1 = "0";
        if not s2: s2 = "0";
        summ = int(s1) + int(s2)
        
        dummy = cur = ListNode()
        for i in reversed(str(summ)):
            cur.next = ListNode(int(i))
            cur = cur.next
        return dummy.next

