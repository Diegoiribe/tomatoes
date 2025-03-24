import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Lun', ventas: 10 },
  { day: 'Mar', ventas: 50 },
  { day: 'Mié', ventas: 80 },
  { day: 'Jue', ventas: 100 },
  { day: 'Vie', ventas: 30 },
  { day: 'Sáb', ventas: 40 },
  { day: 'Dom', ventas: 80 }
]

const Graph = () => {
  return (
    <div className="h-[400px] w-[90%]  p-4 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#000', fontSize: 12, fontWeight: 400 }}
            padding={{ left: 20, right: 20 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ventas"
            stroke="#7CCBF2" // Azul tenue (Tailwind indigo-500)
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
