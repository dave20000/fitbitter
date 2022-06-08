import 'package:fitbitter/src/urls/fitbitAPIURL.dart';

import 'package:fitbitter/src/utils/formats.dart';

/// [FitbitSummaryAPIURL] is a class that expresses multiple factory
/// constructors to be used to generate Fitbit Web APIs urls to fetch
/// [FitbitSummaryData].
class FitbitSummaryAPIURL extends FitbitAPIURL {
  /// Default [FitbitSummaryAPIURL] constructor.
  FitbitSummaryAPIURL({String? url, String? userID}) {
    this.url = url;
    this.userID = userID;
  } // FitbitActivityAPIURL

  /// Generates a [FitbitSummaryAPIURL] to get [FitbitSummaryData] of a
  /// specific day [date] and user [userID].
  factory FitbitSummaryAPIURL.day({String? userID, required DateTime date}) {
    String dateStr = Formats.onlyDayDateFormatTicks.format(date);
    return FitbitSummaryAPIURL(
      url: '${_getBaseURL(userID)}/date/$dateStr.json',
      userID: userID,
    );
  } // FitbitActivityAPIURL.dayWithUserID

  static String _getBaseURL(String? userID) {
    return 'https://api.fitbit.com/1/user/$userID/activities';
  } // _getBaseURL

} // FitbitActivityTimeseriesAPIURL
