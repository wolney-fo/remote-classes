import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en-ca";

dayjs.locale("en-ca");
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export { dayjs };
