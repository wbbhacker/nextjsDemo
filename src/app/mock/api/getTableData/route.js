import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    errors: [],
    data: {
      page: 1,
      total: 200,
      columns: [
        {
          key: 'fpid',
          label: 'FPID',
          type: 'string',
        },
        {
          key: 'uid',
          label: 'UID',
          type: 'string',
        },
        {
          key: 'login_days',
          label: '登录天数',
          type: 'string',
        },
        {
          key: 'pay_silent_percentage',
          label: '付费沉默概率',
          type: 'chart',
        },
        {
          key: 'lost_percentage',
          label: '流失概率',
          type: 'chart',
        },
        {
          key: 'payment_revenue',
          label: '付费金额',
          type: 'chart',
        },
        {
          key: 'week_pay_info',
          label: '阶段累计付费',
          type: 'object',
        },
        {
          key: 'reason',
          label: '异动说明',
          type: 'string',
        },
        {
          key: 'maintain',
          label: '所有者',
          type: 'string',
        },
      ],
      data: [
        {
          fpid: 30127144551253,
          uid: 30127144551253,
          login_days: 5,
          pay_silent_percentage: {
            chart: {
              xAxis: [
                '2023-04-30',
                '2023-05-31',
                '2023-06-30',
                '2023-07-31',
                '2023-08-31',
                '2023-09-30',
                '2023-10-31',
                '2023-11-30',
              ],
              lineData: [
                {
                  name: '下载量',
                  type: '',
                  data: [
                    283730, 308257, 278934, 277342, 291850, 251207, 314483,
                    283744,
                  ],
                },
              ],
            },
            number: '283,744',
            percent: '-9.77%',
            trend: 'negative',
          },
          lost_percentage: {
            chart: {
              xAxis: [
                '2023-04-30',
                '2023-05-31',
                '2023-06-30',
                '2023-07-31',
                '2023-08-31',
                '2023-09-30',
                '2023-10-31',
                '2023-11-30',
              ],
              lineData: [
                {
                  name: '下载量',
                  type: '',
                  data: [
                    283730, 308257, 278934, 277342, 291850, 251207, 314483,
                    283744,
                  ],
                },
              ],
            },
            number: '283,744',
            percent: '9.77%',
            trend: 'positive',
          },
          payment_revenue: {
            chart: {
              xAxis: [
                '2023-04-30',
                '2023-05-31',
                '2023-06-30',
                '2023-07-31',
                '2023-08-31',
                '2023-09-30',
                '2023-10-31',
                '2023-11-30',
              ],
              lineData: [
                {
                  name: '下载量',
                  type: '',
                  data: [
                    283730, 308257, 278934, 277342, 291850, 251207, 314483,
                    283744,
                  ],
                },
              ],
            },
            number: '283,744',
            percent: '-9.77%',
            trend: 'negative',
          },
          week_pay_info: {
            'First 4 Weeks': 26721.99,
            'Data On Data': 20897.91,
            percent: '27.87%',
            trend: 'postive',
          },
          reason:
            ' "高沉默风险,须注意的活动/养成点大类:验证感受;需注意的具体活动/养成点:英雄委任/等离子/水之道/领主徽章/飞行器/主宰/世界地图PVP/联盟争霸赛",',
          maintain: 'lgonzalez.outsource',
        },
      ],
    },
  });
}
