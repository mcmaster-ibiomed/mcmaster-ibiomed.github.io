import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'app',
  styleUrls: const [
    'package:angular_components/app_layout/layout.scss.css',
    'app_component.css',
  ],
  templateUrl: 'app_component.html',
  directives: const [materialDirectives],
)
class AppComponent {}
