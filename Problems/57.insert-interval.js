/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.80%)
 * Total Accepted:    165.8K
 * Total Submissions: 538.3K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 * [[0,10],[14,14],[15,20]]\n[11,11]
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0 || newInterval.end < intervals[0].start) {
    intervals.unshift(newInterval)
    return intervals
  }
  if (newInterval.start > intervals[intervals.length - 1].end) {
    intervals.push(newInterval)
    return intervals
  }
  let num = 0
  let start = -1
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval.start <= intervals[i].end) {
      start = start === -1 ? i : start
      if (newInterval.end >= intervals[i].start) {
        num++
      }
    }
    if (newInterval.end < intervals[i].start) {
      break
    }
  }
  if (num) {
    intervals.splice(start, num, new Interval(Math.min(newInterval.start, intervals[start].start), Math.max(newInterval.end, intervals[start+num-1].end)))
  } else {
    intervals.splice(start,0,newInterval)
  }
  
  return intervals
};
