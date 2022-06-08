import 'package:logger/logger.dart';

import 'package:fitbitter/src/urls/fitbitAPIURL.dart';

import 'package:fitbitter/src/data/fitbitData.dart';

import 'package:fitbitter/src/data/fitbitSummaryData.dart';

import 'package:fitbitter/src/managers/fitbitDataManager.dart';

/// [FitbitSummaryManager] is a class the manages the requests related to
/// [FitbitSummaryData].
class FitbitSummaryManager extends FitbitDataManager {
  /// Default [FitbitSummaryManager] constructor.
  FitbitSummaryManager({String? clientID, String? clientSecret}) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
  } // FitbitActivitySummaryManager

  @override
  Future<List<FitbitData>> fetch(FitbitAPIURL fitbitUrl) async {
    // Get the response
    final response = await getResponse(fitbitUrl);

    // Debugging
    final logger = Logger();
    logger.i('$response');

    //Extract data and return them
    List<FitbitData> ret =
        _extractFitbitSummaryData(response, fitbitUrl.userID);
    return ret;
  } // fetch

  List<FitbitSummaryData> _extractFitbitSummaryData(
      dynamic response, String? userID) {
    final data = response['summary'];
    List<FitbitSummaryData> summaryDataPoints =
        List<FitbitSummaryData>.empty(growable: true);

    summaryDataPoints.add(FitbitSummaryData.fromJson(data));

    return summaryDataPoints;
  } // _extractFitbitSummaryData

} // FitbitActivitySummaryManager
