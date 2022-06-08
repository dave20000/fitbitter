import 'package:fitbitter/src/data/fitbitData.dart';

class FitbitSummaryData implements FitbitData {
  num? activeScore;
  num? activityCalories;
  num? caloriesBMR;
  double? caloriesOut;
  List<Distances>? distances;
  num? fairlyActiveMinutes;
  num? lightlyActiveMinutes;
  num? marginalCalories;
  num? sedentaryMinutes;
  num? steps;
  num? veryActiveMinutes;

  FitbitSummaryData({
    this.activeScore,
    this.activityCalories,
    this.caloriesBMR,
    this.caloriesOut,
    this.distances,
    this.fairlyActiveMinutes,
    this.lightlyActiveMinutes,
    this.marginalCalories,
    this.sedentaryMinutes,
    this.steps,
    this.veryActiveMinutes,
  });

  FitbitSummaryData.fromJson(Map<String, dynamic> json) {
    activeScore = json['activeScore'];
    activityCalories = json['activityCalories'];
    caloriesBMR = json['caloriesBMR'];
    caloriesOut = json['caloriesOut'];
    if (json['distances'] != null) {
      distances = <Distances>[];
      json['distances'].forEach((v) {
        distances!.add(new Distances.fromJson(v));
      });
    }
    fairlyActiveMinutes = json['fairlyActiveMinutes'];
    lightlyActiveMinutes = json['lightlyActiveMinutes'];
    marginalCalories = json['marginalCalories'];
    sedentaryMinutes = json['sedentaryMinutes'];
    steps = json['steps'];
    veryActiveMinutes = json['veryActiveMinutes'];
  }

  Map<String, dynamic> toJson<T extends FitbitData>() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['activeScore'] = this.activeScore;
    data['activityCalories'] = this.activityCalories;
    data['caloriesBMR'] = this.caloriesBMR;
    data['caloriesOut'] = this.caloriesOut;
    if (this.distances != null) {
      data['distances'] = this.distances!.map((v) => v.toJson()).toList();
    }
    data['fairlyActiveMinutes'] = this.fairlyActiveMinutes;
    data['lightlyActiveMinutes'] = this.lightlyActiveMinutes;
    data['marginalCalories'] = this.marginalCalories;
    data['sedentaryMinutes'] = this.sedentaryMinutes;
    data['steps'] = this.steps;
    data['veryActiveMinutes'] = this.veryActiveMinutes;
    return data;
  }
}

class Distances {
  String? activity;
  double? distance;

  Distances({this.activity, this.distance});

  Distances.fromJson(Map<String, dynamic> json) {
    activity = json['activity'];
    distance = json['distance'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['activity'] = this.activity;
    data['distance'] = this.distance;
    return data;
  }
}

// class Distances {
//   Activities? activity;
//   double? distance;

//   Distances({this.activity, this.distance});

//   Distances.fromJson(Map<String, dynamic> json) {
//     activity = json['activity'];
//     distance = json['distance'];
//   }

//   Map<String, dynamic> toJson() {
//     final Map<String, dynamic> data = new Map<String, dynamic>();
//     data['activity'] = this.activity != null ? this.activity!.val : null;
//     data['distance'] = this.distance;
//     return data;
//   }
// }

// enum Activities {
//   run("run"),
//   total("total"),
//   tracker("tracker"),
//   loggedActivities("loggedActivities"),
//   veryActive("veryActive"),
//   moderatelyActive("moderatelyActive"),
//   lightlyActive("lightlyActive"),
//   sedentaryActive("sedentaryActive");

//   final String val;
//   const Activities(this.val);
// }
