import styles from '../../styles/CircleNivoChart.module.css';
import Link from 'next/link';

import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    "id": "rust",
    "label": "rust",
    "value": 178,
    "color": "hsl(131, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 205,
    "color": "hsl(222, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 363,
    "color": "hsl(234, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 136,
    "color": "hsl(298, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 306,
    "color": "hsl(253, 70%, 50%)"
  }
]





function CircleNivoChart() {

  const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purple_red' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsRadiusOffset={0.45}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )

  return (
    <div>
      <h1>CircleNivoChart</h1>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default CircleNivoChart;
