import { wineData } from "./constants/wineData";
import { MantineProvider } from "@mantine/core";
import StatTable from "./components/StatTable/StatTable";

function App() {
  const data = wineData.map((item) => {
    return {
      ...item,
      Gamma: (item.Ash * item.Hue) / item.Magnesium,
    };
  });
  return (
    <MantineProvider>
      <div style={{ padding: "30px" }}>
        <StatTable data={data} baseStat="Flavanoids" />
      </div>
      <div style={{ padding: "30px" }}>
        <StatTable data={data} baseStat="Gamma" />
      </div>
    </MantineProvider>
  );
}

export default App;
