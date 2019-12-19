### HTML
```
  <div class="modal fade" id="loading-modal" role="dialog">
     <div class="loader" ></div>
  </div>
```
### CSS
```
            .loader {
              border: 16px solid #3498db;
              border-radius: 50%;
              border-top: 16px solid blue;
              position: fixed;
              bottom: 50%;
              right: 40%;
              width: 120px;
              height: 120px;
              -webkit-animation: spin 700ms linear infinite; /* Safari */
              animation: spin 700ms linear infinite;
            }

            /* Safari */
            @-webkit-keyframes spin {
              0% { -webkit-transform: rotate(0deg); }
              100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
```
