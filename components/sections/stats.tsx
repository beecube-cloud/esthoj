import {
    AnimatedStat,

  } from '../utils/AnimatedStats';

const stats = [
    {
      value: "126",
      label: "Projects Completed",
      suffix: "+"
    },
    {
      value: "2,500",
      label: "Metric Tons of CO2 Reduced",
    },
    {
      value: "10,000",
      label: "Customers Served",
      suffix: "+"
    },
    {
      value: "15",
      label: "Avg. Energy Saved",
      suffix: "%"
    },
  ];
  

export function StatsSectionAnimated() {
    return (
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                duration={2000}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }