import { NEW_REPORT_ROUTES } from './new-report.route'

import { NewReportScreen, CameraScreen } from '@ui/screens'

export const NewReportRoutes = {
  [NEW_REPORT_ROUTES.NEW_REPORT]: {
    screen: NewReportScreen
  },
  [NEW_REPORT_ROUTES.CAMERA]: {
    screen: CameraScreen
  }
}