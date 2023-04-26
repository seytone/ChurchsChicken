<?php /**
* Copyright 2011 Facebook, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may
* not use this file except in compliance with the License. You may obtain
* a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*/

require 'php/src/facebook.php';

// Create our Application instance (replace this with your appId and secret).
$facebook = new Facebook(array(
  'appId' => '130380060444773',
  'secret' => '661b44837b80bb85fa6a48b8e9d986f4',
));
$urlApp = "http://www.facebook.com/pages/churchsvenezuela/195247663777?sk=app_130380060444773";
// Get User ID
$user = $facebook->getUser();

// We may or may not have this data based on whether the user is logged in.
//
// If we have a $user id here, it means we know the user is logged into
// Facebook, but we don't know if the access token is valid. An access
// token is invalid if the user logged out of Facebook.


if ($user) {
  try {
    // Proceed knowing you have a logged in user who's authenticated.
    $user_profile = $facebook->api('/me');
	} catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}

// Login or logout url will be needed depending on current user state.
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl();
  
} else {
  $loginUrl = $facebook->getLoginUrl( array('scope' => 'email,user_likes', 'redirect_uri' => $urlApp
));
echo "<script type=\"text/javascript\">top.location.href = '$loginUrl';</script>";

 
}
// This call will always work since we are fetching public data.
$naitik = $facebook->api('/naitik');

 ?>