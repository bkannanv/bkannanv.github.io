import { USER_DATA } from "../common/data";
import { User } from "../common/types";
import { useAnalytics } from "../providers/analytics/AnalyticsProvider";

export function Login() {
  const analytics = useAnalytics();
  const handleLogin = (user: User) => {
    analytics.identify(user.id, {
      name: user.name,
      email: user.email,
    });
  };
  return (
    <div>
      <button onClick={() => handleLogin(USER_DATA[1])}>
        Login as Bharathi
      </button>
      <button onClick={() => handleLogin(USER_DATA[2])}>
        Login as Praveen
      </button>
    </div>
  );
}
