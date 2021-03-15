"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2021-03-0
 * @modified
 *
 * @description
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/???/
 * @link https://leetcode-cn.com/problems/???/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


const arr1 = [
  {
    "id": 53,
    "name": "测试10",
    "score": 2.4,
    "children": [
      {
        "id": 53,
        "name": "测试10",
        "created_by": null
      }
    ]
  },
  {
    "id": 41,
    "name": "测试2",
    "score": 5,
    "children": [
      {
        "id": 41,
        "name": "测试2",
        "created_by": "孙玉帅"
      }
    ]
  },
  {
    "id": 70,
    "name": "test-oo",
    "score": 1.4,
    "children": [
      {
        "id": 70,
        "name": "test-oo",
        "created_by": null
      }
    ]
  },
  {
    "id": 130290,
    "name": "测试定向",
    "score": 2.6,
    "children": [
      {
        "id": 130290,
        "name": "测试定向",
        "created_by": "谭碧莹"
      }
    ]
  },
  {
    "id": 130571,
    "name": "test-男不限制机型-勿用",
    "score": 3.4,
    "children": [
      {
        "id": 130571,
        "name": "test-男不限制机型-勿用",
        "created_by": "刘四龙"
      }
    ]
  },
  {
    "id": 75,
    "name": "ttttttest",
    "score": 1.4,
    "children": [
      {
        "id": 75,
        "name": "ttttttest",
        "created_by": null
      }
    ]
  },
  {
    "id": 42,
    "name": "测试3",
    "score": 3.6,
    "children": [
      {
        "id": 42,
        "name": "测试3",
        "created_by": "吴成(Nic)"
      }
    ]
  },
  {
    "id": 52,
    "name": "测试9",
    "score": 2.8,
    "children": [
      {
        "id": 52,
        "name": "测试9",
        "created_by": null
      }
    ]
  },
  {
    "id": 56,
    "name": "测试——2",
    "score": 2,
    "children": [
      {
        "id": 56,
        "name": "测试——2",
        "created_by": null
      }
    ]
  },
  {
    "id": 63,
    "name": "test3",
    "score": 1.8,
    "children": [
      {
        "id": 63,
        "name": "test3",
        "created_by": null
      }
    ]
  },
  {
    "id": 130676,
    "name": "测试定向",
    "score": 5,
    "children": [
      {
        "id": 130676,
        "name": "测试定向",
        "created_by": "九星代投_今日头条_测试"
      }
    ]
  },
  {
    "id": 68,
    "name": "2035",
    "score": 1.5,
    "children": [
      {
        "id": 68,
        "name": "2035",
        "created_by": null
      }
    ]
  },
  {
    "id": 43,
    "name": "测试4",
    "score": 3.3,
    "children": [
      {
        "id": 43,
        "name": "测试4",
        "created_by": null
      }
    ]
  },
  {
    "id": 130572,
    "name": "行为兴趣泛用户-男-IOS-SYR-预约",
    "score": 3.9,
    "children": [
      {
        "id": 130572,
        "name": "行为兴趣泛用户-男-IOS-SYR-预约",
        "created_by": "刘四龙"
      }
    ]
  },
  {
    "id": 13051,
    "name": "test_111",
    "score": 2.2,
    "children": [
      {
        "id": 13051,
        "name": "test_111",
        "created_by": null
      }
    ]
  },
  {
    "id": 6166,
    "name": "test_02",
    "score": 1.8,
    "children": [
      {
        "id": 6166,
        "name": "test_02",
        "created_by": null
      }
    ]
  },
  {
    "id": 1344,
    "name": "1031_1",
    "score": 1.6,
    "children": [
      {
        "id": 1344,
        "name": "1031_1",
        "created_by": null
      }
    ]
  },
  {
    "id": 8625,
    "name": "测试定向行为兴趣1107",
    "score": 2.1,
    "children": [
      {
        "id": 8625,
        "name": "测试定向行为兴趣1107",
        "created_by": null
      }
    ]
  },
  {
    "id": 573,
    "name": "迭代5",
    "score": 1.5,
    "children": [
      {
        "id": 573,
        "name": "迭代5",
        "created_by": null
      }
    ]
  },
  {
    "id": 541,
    "name": "迭代1010",
    "score": 1.5,
    "children": [
      {
        "id": 541,
        "name": "迭代1010",
        "created_by": null
      }
    ]
  }
];

const arr2 = [
  {
    "audience_id": 130676,
    "audience_name": "测试定向",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 1,
    "updated_at": "2021-03-04 21:41:54",
    "created_by": "九星代投_今日头条_测试",
    "orientation_status": "已用",
    "status": 1
  },
  {
    "audience_id": 130572,
    "audience_name": "行为兴趣泛用户-男-IOS-SYR-预约",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2020-08-21 19:00:09",
    "created_by": "刘四龙",
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 130571,
    "audience_name": "test-男不限制机型-勿用",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2020-08-21 18:43:27",
    "created_by": "刘四龙",
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 130290,
    "audience_name": "测试定向",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 2,
    "updated_at": "2020-07-16 20:38:40",
    "created_by": "谭碧莹",
    "orientation_status": "已用",
    "status": 1
  },
  {
    "audience_id": 114919,
    "audience_name": "测试人群包选择",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 1,
    "updated_at": "2020-05-28 18:23:56",
    "created_by": "刘四龙",
    "orientation_status": "已用",
    "status": 1
  },
  {
    "audience_id": 99792,
    "audience_name": "test_05",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 6,
    "updated_at": "2020-02-27 11:38:32",
    "created_by": null,
    "orientation_status": "已用",
    "status": 1
  },
  {
    "audience_id": 99791,
    "audience_name": "test_01",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 4,
    "updated_at": "2020-02-27 11:22:49",
    "created_by": null,
    "orientation_status": "已用",
    "status": 1
  },
  {
    "audience_id": 47752,
    "audience_name": "test_recon1",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2020-01-02 17:51:44",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 13159,
    "audience_name": "test_13",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-12-04 18:23:33",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 13052,
    "audience_name": "test_1122",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-19 18:27:45",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 13051,
    "audience_name": "test_111",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-19 16:58:10",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 8625,
    "audience_name": "测试定向行为兴趣1107",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-07 16:57:04",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 6666,
    "audience_name": "test_03",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-04 16:35:02",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 6166,
    "audience_name": "test_02",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-04 10:16:59",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 6157,
    "audience_name": "test_01",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-11-01 18:51:49",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 1344,
    "audience_name": "1031_1",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-31 10:36:53",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 1166,
    "audience_name": "test_ios_andr",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-30 11:17:59",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 573,
    "audience_name": "迭代5",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-14 11:53:52",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 572,
    "audience_name": "迭代4",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-14 11:52:27",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 556,
    "audience_name": "迭代3",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-11 12:02:00",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 541,
    "audience_name": "迭代1010",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-11 11:13:05",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 532,
    "audience_name": "test_10081624",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-10-08 16:24:25",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 406,
    "audience_name": "test0927",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-09-27 15:52:50",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 179,
    "audience_name": "222222",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-08-08 18:13:35",
    "created_by": "沈舒娴",
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 178,
    "audience_name": "test333",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-08-08 18:09:41",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 177,
    "audience_name": "test222",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-08-08 18:08:54",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 176,
    "audience_name": "test111",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-08-08 17:11:13",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 154,
    "audience_name": "test000",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-24 10:57:06",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 149,
    "audience_name": "测试定向包tby",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-18 14:26:59",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 148,
    "audience_name": "201907181009",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-18 10:49:53",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 136,
    "audience_name": "dah测试",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-08 10:48:49",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 134,
    "audience_name": "dah",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-08 10:00:19",
    "created_by": "沈舒娴",
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 133,
    "audience_name": "test5",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-05 18:13:06",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 132,
    "audience_name": "0705",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-07-05 17:57:58",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 127,
    "audience_name": "test_06251900",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 19:09:29",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 125,
    "audience_name": "test_06251755",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 18:04:51",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 120,
    "audience_name": "六十六",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:53:38",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 118,
    "audience_name": "rqrqe",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:24:47",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 117,
    "audience_name": "rqrqe",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:23:57",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 116,
    "audience_name": "rqrqe",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:22:42",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 115,
    "audience_name": "test_06251515",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:17:33",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 114,
    "audience_name": "test_06251500",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 15:14:53",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 113,
    "audience_name": "test-oo",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-25 14:40:33",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 111,
    "audience_name": "test_06241600",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-24 16:03:17",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 96,
    "audience_name": "1432",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-21 14:39:36",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 83,
    "audience_name": "test_06211015",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-21 10:17:08",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 81,
    "audience_name": "测试定向包",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-20 18:55:14",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 75,
    "audience_name": "ttttttest",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-20 10:24:49",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 70,
    "audience_name": "test-oo",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 20:40:41",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 69,
    "audience_name": "test-ii",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 20:38:19",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 68,
    "audience_name": "2035",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 20:36:54",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 63,
    "audience_name": "test3",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 20:15:14",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 62,
    "audience_name": "test2",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 20:13:42",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 56,
    "audience_name": "测试——2",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 16:47:22",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 53,
    "audience_name": "测试10",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-19 14:29:39",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 52,
    "audience_name": "测试9",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-18 19:06:29",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 43,
    "audience_name": "测试4",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-18 18:18:05",
    "created_by": null,
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 42,
    "audience_name": "测试3",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-18 17:34:55",
    "created_by": "吴成(Nic)",
    "orientation_status": "未用",
    "status": 1
  },
  {
    "audience_id": 41,
    "audience_name": "测试2",
    "spreader": "巨量引擎",
    "game": "万国觉醒",
    "plan_nums": 0,
    "updated_at": "2019-06-18 15:31:14",
    "created_by": "孙玉帅",
    "orientation_status": "未用",
    "status": 1
  }
];

const ids1 =  arr1.map(obj => obj.id).sort((a, b) => a - b > 0 ? 1 : -1);

const ids2 =  arr2.map(obj => obj.audience_id).sort((a, b) => a - b > 0 ? 1 : -1);


log(`ids1 =`, ids1);
log(`ids2 =`, ids2);

const ids = [];

for (const id of ids2) {
  if(!ids1.includes(id)) {
    ids.push(id);
  }
}
log(`ids =`, ids);
// [ 62, 69, 81, 83, 96, 111, 113, 114, 115, 116, 117, 118, 120, 125, 127, 132, 133, 134, 136, 148, 149, 154, 176, 177, 178, 179, 406, 532, 556, 572, 1166, 6157, 6666, 13052, 13159, 47752, 99791, 99792, 114919 ]

// for (const id of ids1) {
//   if(!ids2.includes(id)) {
//     ids.push(id);
//   }
// }
// log(`ids =`, ids);
// []
