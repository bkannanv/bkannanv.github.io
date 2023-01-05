import { PRODUCT_DATA } from "../common/data";
import { Product } from "../common/types";
import { useAnalytics } from "../providers/analytics/AnalyticsProvider";

export function Products() {
  const analytics = useAnalytics();
  const handleLogin = (product: Product) => {
    analytics.track("Viewed", {
      ...product,
    });
  };
  return (
    <div>
      <button onClick={() => handleLogin(PRODUCT_DATA[1])}>Chair</button>
      <button onClick={() => handleLogin(PRODUCT_DATA[2])}>Desk</button>
    </div>
  );
}
