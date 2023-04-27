
import Grid from "./Grid";

export default function DashboardGrids() {
  return (
    <div className="grid-container py-4">
      <div className="grid-column">
        <Grid variant="large" name="Build a Load" icon="build-load"></Grid>
        <Grid variant="normal" name="Rates" icon="rates"></Grid>
        <Grid variant="normal" name="Accounting" icon="accounting"></Grid>
      </div>
      <div className="grid-column">
        <Grid variant="wide" name="Loads" icon="loads"></Grid>
        <Grid variant="normal" name="LTL Orders" icon="ltl-orders"></Grid>
        <Grid variant="normal" name="EDI / Tenders" icon="edi-tenders"></Grid>
        <Grid variant="wide" name="Doc Management" icon="doc-mgmt"></Grid>
      </div>
      <div className="grid-column">
        <Grid variant="wide" name="Customers" icon="cust"></Grid>
        <Grid variant="wide" name="Assets" icon="assets"></Grid>
        <Grid variant="normal" name="Report" icon="reports"></Grid>
        <Grid variant="normal" name="Learn" icon="learn"></Grid>
      </div>
      <div className="grid-column lastColumn">
        <Grid variant="normal" name="Carriers" icon="carriers"></Grid>
        <Grid variant="normal" name="Locations" icon="location"></Grid>
        <Grid variant="small" name="Help" icon="help"></Grid>
        <Grid variant="small" name="Settings" icon="setting"></Grid>
      </div>
    </div>
  );
}
