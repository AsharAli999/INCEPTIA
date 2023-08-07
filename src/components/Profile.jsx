import React from "react";

function Profile() {
  return (
    <div
      className="mt-0"
      style={{ backgroundColor: "#1a1c1f", color: "white" }}
    >
      <div className="container mx-auto">
        <div className="main-body">
          {/* Breadcrumb */}

          {/* /Breadcrumb */}
          <div
            className="mt-0"
            style={{ backgroundColor: "#1a1c1f", color: "white" }}
          >
            <div
              className="flex flex-col md:flex-row   md:space-x-6"
              style={{ backgroundColor: "#1a1c1f", color: "white" }}
            >
              <div className="md:w-1/3">
                <div
                  className="bg-white rounded-lg shadow-md mb-3"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <div className="flex flex-col items-center justify-center p-6">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Admin"
                      className="mb-3 w-1/2"
                    />

                    <div className="text-center">
                    <h5 className="text-xl font-medium">Username</h5>
                      <h4 className="text-xl font-medium">Level</h4>

                      <input type="range" min="0" max="100" value="25" className="range" step="25" />
<div className="w-full flex justify-between text-xs px-2">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>
                      <button
                        className="bg-blue-500 text-white rounded-full px-4 py-2 mt-3 mr-3 hover:bg-blue-600"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                        }}
                      >
                        Get Upgrade
                      </button>
                      <button
                        className="bg-white text-white-500 border border-green-500 rounded-full px-4 py-2 mt-3 hover:bg-green-50"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                        }}
                      >
                        Sell Account
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white rounded-lg shadow-md mb-3"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <div className="p-6">
                    <h5 className="mb-3 font-medium">Games Played</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Grand Theft Auto
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Minecraft
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        call od Duty
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        IGI
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Counter Strike 2
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-3" style={{ backgroundColor: "#24262b", color: "white" }}>
  <h5 className="text-lg font-medium mb-4" style={{ backgroundColor: "#24262b", color: "white" }}>Personal Statistics & Information</h5>
  <div className="flex flex-col">

  <h6 className="text-lg font-medium mb-4" style={{ backgroundColor: "#24262b", color: "white" }}>Booster Time Left</h6>
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-4 mb-4">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":38}}></span>
    </span>
    sec
  </div>
</div>
    <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Coins</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Last 7 Days coins</div>
    <div className="stat-value text-green-500">4,200</div>
  <div className="stat-desc text-green-500">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Loss Coins</div>
    <div className="stat-value" >1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
  </div>
</div>

                <div
                  className="bg-white rounded-lg shadow-md p-6"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <h5 className="text-lg font-medium mb-4">
                    Games Progress and Levels
                  </h5>
                  <div className="flex flex-wrap">
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 1
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 2
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 3
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-yellow-500"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 4
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 4
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-red-500"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 6
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
