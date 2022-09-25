import React from "react";

export default function Search() {
  return (
    
    <div className="container text-center position-absolute top-50 start-50 translate-middle">
    <div className="col-md-6 position-absolute top-50 start-50 translate-middle">
        <img className="my-3"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text py-3" id="basic-addon2">
        <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <input
        type="search"
        class="form-control"
      />
    </div>
    </div>
    </div>
  );
}
