import React, { Component } from "react";

/*
This component renders SVG instead of the classic HTML elements.
 */
class Logo extends Component {

  render() {
    /*return (
      <h1>React eCommerce platform<h1>
      <svg width="120" height="46" viewBox="0 0 256 97" version="1.1">
        <g>
          <ellipse cx="126.58296" cy="48.704142" rx="9.32735426" ry="9.46745562"></ellipse>
          <path d="M227.674518,31.1050207 C211.103648,27.236473 188.813767,25.035503 165.058296,25.035503 C141.302825,25.035503 119.012944,27.236473 102.442074,31.1050207 C84.5002916,35.2936144 74.1165919,41.0248863 74.1165919,49 C74.1165919,56.9751137 84.5002916,62.7063856 102.442074,66.8949793 C119.012944,70.763527 141.302825,72.964497 165.058296,72.964497 C188.813767,72.964497 211.103648,70.763527 227.674518,66.8949793 C245.6163,62.7063856 256,56.9751137 256,49 C256,41.0248863 245.6163,35.2936144 227.674518,31.1050207 Z M243.959519,53.8271478 C239.887521,56.074683 233.793781,58.1804262 226.106489,59.9750608 C210.091187,63.7139085 188.317527,65.8639053 165.058296,65.8639053 C141.799065,65.8639053 120.025405,63.7139085 104.010103,59.9750608 C96.3228107,58.1804262 90.2290713,56.074683 86.1570728,53.8271478 C82.649945,51.8913923 81.1121076,50.1369279 81.1121076,49 C81.1121076,47.8630721 82.649945,46.1086077 86.1570728,44.1728522 C90.2290713,41.925317 96.3228107,39.8195738 104.010103,38.0249392 C120.025405,34.2860915 141.799065,32.1360947 165.058296,32.1360947 C188.317527,32.1360947 210.091187,34.2860915 226.106489,38.0249392 C233.793781,39.8195738 239.887521,41.925317 243.959519,44.1728522 C247.466647,46.1086077 249.004484,47.8630721 249.004484,49 C249.004484,50.1369279 247.466647,51.8913923 243.959519,53.8271478 Z"></path>
          <path d="M100.349776,94.8238381 C111.743047,101.50055 131.342477,85.3070051 145.767558,59.9467456 C160.192639,34.586486 164.209415,9.26115759 152.816143,2.58444595 C141.422872,-4.09226569 121.823442,12.1012789 107.398361,37.4615385 C92.97328,62.821798 88.9565044,88.1471264 100.349776,94.8238381 Z M134.680457,14.3256072 C141.247364,8.89986253 146.594265,7.1373433 149.318386,8.73373876 C152.042506,10.3301342 153.212158,15.9114996 151.866313,24.3969034 C150.386709,33.7256434 146.089917,45.1788332 139.709264,56.3964497 C133.328611,67.6140662 125.705033,77.1176854 118.485463,83.0826769 C111.918556,88.5084215 106.571654,90.2709407 103.847534,88.6745453 C101.123413,87.0781498 99.953761,81.4967844 101.299606,73.0113807 C102.77921,63.6826406 107.076002,52.2294508 113.456655,41.0118343 C119.837309,29.7942179 127.460886,20.2905986 134.680457,14.3256072 Z"></path>
          <path d="M152.816143,94.8238381 C164.209415,88.1471264 160.192639,62.821798 145.767558,37.4615385 C131.342477,12.1012789 111.743047,-4.09226569 100.349776,2.58444595 C88.9565044,9.26115759 92.97328,34.586486 107.398361,59.9467456 C121.823442,85.3070051 141.422872,101.50055 152.816143,94.8238381 Z M101.299606,24.3969034 C99.953761,15.9114996 101.123413,10.3301342 103.847534,8.73373876 C106.571654,7.1373433 111.918556,8.89986253 118.485463,14.3256072 C125.705033,20.2905986 133.328611,29.7942179 139.709264,41.0118343 C146.089917,52.2294508 150.386709,63.6826406 151.866313,73.0113807 C153.212158,81.4967844 152.042506,87.0781498 149.318386,88.6745453 C146.594265,90.2709407 141.247364,88.5084215 134.680457,83.0826769 C127.460886,77.1176854 119.837309,67.6140662 113.456655,56.3964497 C107.076002,45.1788332 102.77921,33.7256434 101.299606,24.3969034 Z"></path>
          <ellipse cx="198.286996" cy="48.704142" rx="9.32735426" ry="9.46745562"></ellipse>
          <path d="M172.053812,94.8238381 C183.447083,101.50055 203.046513,85.3070051 217.471594,59.9467456 C231.896675,34.586486 235.913451,9.26115759 224.520179,2.58444595 C213.126908,-4.09226569 193.527478,12.1012789 179.102397,37.4615385 C164.677316,62.821798 160.66054,88.1471264 172.053812,94.8238381 Z M206.384492,14.3256072 C212.951399,8.89986253 218.298301,7.1373433 221.022422,8.73373876 C223.746542,10.3301342 224.916194,15.9114996 223.570349,24.3969034 C222.090745,33.7256434 217.793953,45.1788332 211.4133,56.3964497 C205.032646,67.6140662 197.409069,77.1176854 190.189499,83.0826769 C183.622592,88.5084215 178.27569,90.2709407 175.55157,88.6745453 C172.827449,87.0781498 171.657797,81.4967844 173.003642,73.0113807 C174.483246,63.6826406 178.780038,52.2294508 185.160691,41.0118343 C191.541345,29.7942179 199.164922,20.2905986 206.384492,14.3256072 Z"></path>
          <path d="M224.520179,94.8238381 C235.913451,88.1471264 231.896675,62.821798 217.471594,37.4615385 C203.046513,12.1012789 183.447083,-4.09226569 172.053812,2.58444595 C160.66054,9.26115759 164.677316,34.586486 179.102397,59.9467456 C193.527478,85.3070051 213.126908,101.50055 224.520179,94.8238381 Z M173.003642,24.3969034 C171.657797,15.9114996 172.827449,10.3301342 175.55157,8.73373876 C178.27569,7.1373433 183.622592,8.89986253 190.189499,14.3256072 C197.409069,20.2905986 205.032646,29.7942179 211.4133,41.0118343 C217.793953,52.2294508 222.090745,63.6826406 223.570349,73.0113807 C224.916194,81.4967844 223.746542,87.0781498 221.022422,88.6745453 C218.298301,90.2709407 212.951399,88.5084215 206.384492,83.0826769 C199.164922,77.1176854 191.541345,67.6140662 185.160691,56.3964497 C178.780038,45.1788332 174.483246,33.7256434 173.003642,24.3969034 Z"></path>
          <path d="M66.2973978,15.9161063 L66.2973978,0 L12.5167286,0 L3.0260223,52.6455823 L20.6319703,52.6455823 C22.5576304,50.0155573 24.6208068,48.0884127 26.8215613,46.8640907 C29.0223158,45.6397687 31.8649144,45.0276169 35.3494424,45.0276169 C38.0086874,45.0276169 40.346954,45.4810627 42.3643123,46.3879679 C44.3816706,47.294873 46.1239084,48.5645212 47.5910781,50.1969506 C49.0582477,51.8293799 50.1586085,53.7338522 50.8921933,55.9104246 C51.6257781,58.086997 51.9925651,60.3995705 51.9925651,62.8482145 C51.9925651,65.206168 51.602854,67.4960692 50.8234201,69.7179869 C50.0439862,71.9399046 48.9436254,73.8897215 47.5223048,75.567496 C46.1009842,77.2452706 44.3587464,78.605608 42.295539,79.6485489 C40.2323317,80.6914899 37.9169893,81.2129525 35.3494424,81.2129525 C30.9479334,81.2129525 27.3259126,79.920632 24.4832714,77.3359523 C21.6406301,74.7512725 19.990089,71.2824123 19.5315985,66.9292674 L0,66.9292674 C0.0916981041,71.9172459 1.1232863,76.2929977 3.09479554,80.0566542 C5.06630478,83.8203107 7.70258572,86.9717589 11.0037175,89.5110934 C14.3048492,92.0504279 18.0873393,93.9322279 22.3513011,95.1565499 C26.615263,96.3808719 31.0854785,96.9930237 35.7620818,96.9930237 C40.6220813,97.0837142 45.2069177,96.2901841 49.5167286,94.6124095 C53.8265395,92.934635 57.6090296,90.5540446 60.8643123,87.470567 C64.119595,84.3870894 66.7100275,80.7368508 68.6356877,76.5197417 C70.5613479,72.3026326 71.5241636,67.7455025 71.5241636,62.8482145 C71.5241636,58.4043792 70.8593623,54.2100056 69.5297398,50.2649681 C68.2001173,46.3199306 66.274486,42.8964149 63.7527881,39.9943183 C61.2310902,37.0922218 58.1363257,34.7796483 54.4684015,33.0565284 C50.8004773,31.3334086 46.5824278,30.4718616 41.8141264,30.4718616 C37.962806,30.4718616 34.5241787,31.0386688 31.4981413,32.1723003 C28.4721038,33.3059318 25.6295052,35.1877318 22.9702602,37.8177568 L22.6951673,37.5456866 L26.5464684,15.9161063 L66.2973978,15.9161063 Z"></path>
        </g>
      </svg>
    );*/
    return (
      <h1>React eCommerce platform</h1>
    );
  }

}

export default Logo;
