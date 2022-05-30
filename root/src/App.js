import "./App.css";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Content } from "./components/content";
import { TableProvider } from "./providers/table_provider";

function App() {
  return (
    <TableProvider>
      <Header />
      <Menu />
      <Content />
    </TableProvider>
  );
}

export default App;
