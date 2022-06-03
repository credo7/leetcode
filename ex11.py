class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxV = 0
        l = 0
        r = len(height) - 1
        while (l != r):
            v = (r - l) * min(height[l], height[r])
            if v > maxV:
                maxV = v
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return maxV