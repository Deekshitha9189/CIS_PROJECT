(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`aws`,name:`AWS`,color:`var(--accent-aws)`,instances:42,cpu:65,mem:58,status:`Healthy`,region:`us-east-1`},{id:`azure`,name:`Azure`,color:`var(--accent-azure)`,instances:28,cpu:45,mem:72,status:`Healthy`,region:`eu-west-1`},{id:`gcp`,name:`GCP`,color:`var(--accent-gcp)`,instances:16,cpu:82,mem:40,status:`Healthy`,region:`asia-northeast1`}],t=1;e.forEach(e=>{e.cpuHistory=Array(20).fill(e.cpu)}),document.querySelector(`#app`).innerHTML=`
  <!-- Login View -->
  <div id="login-container" style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; position: absolute; z-index: 100; transition: opacity 0.3s;">
    <div class="glass-panel" style="padding: 3rem; width: 400px; max-width: 90%; text-align: center; position: relative;">
       <div class="flex-center" style="margin-bottom: 2rem;">
          <div class="brand-icon" style="width: 40px; height: 40px; box-shadow: 0 0 20px var(--accent-neon);"></div>
          <h2 style="margin-left: 10px; font-size: 2rem;">CloudSim</h2>
       </div>
       <p style="color: var(--text-secondary); margin-bottom: 2.5rem;">Access Global Infrastructure Control</p>
       
       <form id="login-form" onsubmit="event.preventDefault();">
         <div style="text-align: left; margin-bottom: 1.5rem;">
           <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">Email Address</label>
           <input type="text" id="login-email" required placeholder="admin@cloudsim.com" style="width: 100%; padding: 0.8rem 1rem; background: rgba(0,0,0,0.3); border: 1px solid var(--border-strong); color: var(--text-primary); border-radius: 8px; font-family: inherit; transition: 0.2s;" onfocus="this.style.borderColor='var(--accent-neon)'" onblur="this.style.borderColor='var(--border-strong)'">
         </div>
         <div style="text-align: left; margin-bottom: 2.5rem;">
           <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">Password</label>
           <input type="password" id="login-password" required placeholder="••••••••" style="width: 100%; padding: 0.8rem 1rem; background: rgba(0,0,0,0.3); border: 1px solid var(--border-strong); color: var(--text-primary); border-radius: 8px; font-family: inherit; transition: 0.2s;" onfocus="this.style.borderColor='var(--accent-neon)'" onblur="this.style.borderColor='var(--border-strong)'">
         </div>
         <button type="submit" id="btn-login" class="action-btn" style="width: 100%; background: var(--accent-neon); border: none; padding: 1rem; font-weight: 600; font-size: 1rem; box-shadow: 0 0 15px rgba(2, 132, 199, 0.4);">Sign In</button>
       </form>
    </div>
  </div>

  <!-- Main App View -->
  <div id="app-container" style="display: none; width: 100vw; height: 100vh; opacity: 0; transition: opacity 0.5s;">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon"></div>
        CloudSim
      </div>
      <div class="sidebar-nav">
        <div class="nav-item active" data-view="dashboard">Dashboard</div>
        <div class="nav-item" data-view="providers">Cloud Providers</div>
        <div class="nav-item" data-view="reports">Reports</div>
      </div>
    </aside>
    
    <main class="main-content">
      <header class="top-bar flex-between" style="position: sticky; top: 0; z-index: 50;">
        <div class="context-info">
          <h2 style="font-size: 1.25rem;">Global Infrastructure</h2>
          <p style="margin-top: 0.2rem;">Live metrics from 3 cloud environments</p>
        </div>
        <div class="controls flex-center" style="gap: 1.5rem;">
          <div class="flex-center" style="gap: 0.5rem; background: var(--bg-card); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid var(--border-light);">
            <div class="status-indicator status-active"></div>
            <span style="font-size: 0.85rem; font-weight: 500;">Simulation Active</span>
          </div>
          <button id="toggle-sim-btn" class="action-btn" style="padding: 0.5rem 1rem;">
            Pause Traffic
          </button>
          <div class="profile-menu-wrapper" style="position: relative;">
            <div id="btn-profile" class="profile-icon" style="width: 35px; height: 35px; border-radius: 50%; background: var(--bg-card); border: 2px solid var(--border-light); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s;" onmouseover="this.style.borderColor='var(--accent-neon)'" onmouseout="this.style.borderColor='var(--border-light)'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-secondary);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div id="profile-dropdown" style="position: absolute; top: 130%; right: 0; width: 260px; padding: 1.2rem; display: none; flex-direction: column; opacity: 0; transition: opacity 0.2s; z-index: 1000; background: #0b111e; border: 1px solid var(--border-strong); border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
              <div style="display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid var(--border-strong); padding-bottom: 1rem; margin-bottom: 1rem;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--accent-neon); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.1rem; box-shadow: 0 0 10px rgba(2, 132, 199, 0.4);">AD</div>
                <div>
                  <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-primary);">Admin User</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">admin@cloudsim.com</div>
                </div>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 0.9rem; color: var(--text-secondary);">Environment</span>
                <select id="env-select" style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-strong); color: var(--text-primary); padding: 0.4rem; border-radius: 6px; font-family: inherit; font-size: 0.85rem; cursor: pointer;">
                  <option value="prod">Production</option>
                  <option value="staging">Staging</option>
                  <option value="dev">Development</option>
                </select>
              </div>
              
              <button id="btn-logout" class="action-btn" style="width: 100%; text-align: center; border-color: var(--border-strong); background: rgba(0,0,0,0.2); color: var(--text-secondary); margin-top: 0.5rem;">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Dashboard View -->
      <div id="view-dashboard" class="content-view active" style="transition: opacity 0.3s; opacity: 1;">
        <div class="dashboard-container">
          <!-- Top KPI Cards -->
          <section class="grid-3" id="provider-widgets">
            ${e.map(e=>`
              <div class="glass-panel provider-card-${e.id}" style="padding: 1.5rem; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: ${e.color};"></div>
                <div class="flex-between" style="margin-bottom: 1.5rem;">
                  <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span style="width: 12px; height: 12px; border-radius: 3px; background: ${e.color}; display: inline-block;"></span>
                    ${e.name}
                  </h3>
                  <span style="font-size: 1.25rem; font-weight: 700; color: ${e.color}; transition: transform 0.2s; display: inline-block;" id="${e.id}-instances">${e.instances}</span>
                </div>
                
                <div style="margin-bottom: 1rem;">
                  <div class="flex-between" style="font-size: 0.85rem; margin-bottom: 0.3rem;">
                    <span style="color: var(--text-secondary);">CPU Load</span>
                    <span id="${e.id}-cpu-text">${e.cpu}%</span>
                  </div>
                  <div style="width: 100%; height: 6px; background: rgba(0,0,0,0.3); border-radius: 3px; overflow: hidden;">
                    <div id="${e.id}-cpu-bar" style="height: 100%; width: ${e.cpu}%; background: ${e.color}; transition: width 0.5s ease;"></div>
                  </div>
                </div>
                
                <div>
                  <div class="flex-between" style="font-size: 0.85rem; margin-bottom: 0.3rem;">
                    <span style="color: var(--text-secondary);">Memory</span>
                    <span id="${e.id}-mem-text">${e.mem}%</span>
                  </div>
                  <div style="width: 100%; height: 6px; background: rgba(0,0,0,0.3); border-radius: 3px; overflow: hidden;">
                    <div id="${e.id}-mem-bar" style="height: 100%; width: ${e.mem}%; background: ${e.color}; transition: width 0.5s ease; opacity: 0.7;"></div>
                  </div>
                </div>
              </div>
            `).join(``)}
          </section>
          
          <section class="grid-2">
            <!-- Traffic Map Mock -->
            <div class="glass-panel" style="min-height: 350px; padding: 1.5rem; display: flex; flex-direction: column;">
              <h3>Global Traffic Distribution</h3>
              <div id="traffic-chart" style="flex: 1; margin-top: 1rem; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                <div style="width: 150px; height: 150px; border-radius: 50%; border: 2px dashed rgba(255,255,255,0.2); position: absolute; animation: spin 20s linear infinite;"></div>
                <div style="width: 220px; height: 220px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.05); position: absolute; animation: spin-reverse 35s linear infinite;"></div>
                
                <div style="width: 60px; height: 60px; border-radius: 50%; background: radial-gradient(circle, var(--bg-card-hover), transparent); display: flex; align-items: center; justify-content: center; z-index: 2; border: 1px solid var(--border-strong);">
                  <span class="status-indicator status-active" style="width: 12px; height: 12px; box-shadow: 0 0 15px var(--accent-success);"></span>
                </div>
                
                <div class="aws-node-indicator" style="position: absolute; top: 20%; left: 30%; width: 10px; height: 10px; background: var(--accent-aws); border-radius: 50%; box-shadow: 0 0 10px var(--accent-aws);"></div>
                <div class="azure-node-indicator" style="position: absolute; bottom: 30%; left: 20%; width: 8px; height: 8px; background: var(--accent-azure); border-radius: 50%; box-shadow: 0 0 10px var(--accent-azure);"></div>
                <div class="gcp-node-indicator" style="position: absolute; top: 40%; right: 25%; width: 12px; height: 12px; background: var(--accent-gcp); border-radius: 50%; box-shadow: 0 0 10px var(--accent-gcp);"></div>
                
                <div style="position: absolute; bottom: 10px; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
                  Simulating connections and packets across 3 providers
                </div>
              </div>
            </div>
            
            <!-- Event Logs -->
            <div class="glass-panel" style="min-height: 350px; padding: 1.5rem; display: flex; flex-direction: column;">
               <div class="flex-between">
                 <h3>System Event Log</h3>
                 <span style="font-size: 0.8rem; color: var(--text-muted);">Auto-updating</span>
               </div>
               <div id="event-log" style="flex: 1; margin-top: 1rem; overflow-y: hidden; display: flex; flex-direction: column; gap: 0.5rem; font-family: monospace; font-size: 0.85rem;">
               </div>
            </div>
          </section>

          <!-- Simulator Triggers -->
          <section class="glass-panel" style="padding: 1.5rem;">
            <h3>Quick Simulation Triggers</h3>
            <p style="color: var(--text-secondary); margin: 0.5rem 0 1rem 0; font-size: 0.9rem;">Manually inject faults or traffic spikes to observe auto-scaling behavior.</p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button class="action-btn" id="btn-outage" style="background: rgba(239, 68, 68, 0.1); border: 1px solid var(--accent-danger); color: var(--accent-danger);">Trigger Azure Outage</button>
              <button class="action-btn" id="btn-ddos" style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--accent-warning); color: var(--accent-warning);">Initiate AWS DDoS</button>
              <button class="action-btn" id="btn-surge" style="background: rgba(2, 132, 199, 0.1); border: 1px solid var(--accent-neon); color: var(--accent-neon);">Global Traffic Surge</button>
            </div>
          </section>
          
          <section class="glass-panel" style="padding: 1.5rem; margin-bottom: 2rem;">
             <h3>Aggregated CPU Trend</h3>
             <div id="resource-chart" style="margin-top: 1.5rem;"></div>
          </section>
        </div>
      </div>
      
      <!-- Providers View -->
      <div id="view-providers" class="content-view" style="display: none; transition: opacity 0.3s; opacity: 0;">
        <div class="dashboard-container">
          <div style="margin-bottom: 1.5rem;">
            <h2>Cloud Provider Analytics</h2>
            <p style="color: var(--text-secondary);">Detailed insights into specific cloud provider performance and architectural nodes.</p>
          </div>
          
          <div class="grid-3">
            ${e.map(e=>`
              <div class="glass-panel provider-card-${e.id}" style="padding: 1.5rem; border-top: 3px solid ${e.color};">
                <div class="flex-between" style="margin-bottom: 1rem;">
                   <h3 style="color: ${e.color}; font-size: 1.3rem; margin: 0;">${e.name} Suite</h3>
                   <span class="status-indicator" id="prov-indicator-${e.id}" style="background: ${e.status===`Healthy`?`var(--accent-success)`:`var(--accent-danger)`}; box-shadow: 0 0 8px ${e.status===`Healthy`?`var(--accent-success)`:`var(--accent-danger)`};"></span>
                </div>
                
                <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                  <div class="flex-between" style="margin-bottom: 0.5rem;">
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Primary Region</span>
                    <span style="font-family: monospace; font-size: 0.9rem; color: var(--text-primary);">${e.region}</span>
                  </div>
                  <div class="flex-between" style="margin-bottom: 0.5rem;">
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">Running Instances</span>
                    <span style="font-weight: 600; font-size: 1.1rem; color: ${e.color};" id="prov-instances-${e.id}">${e.instances}</span>
                  </div>
                  <div class="flex-between">
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">State</span>
                    <span id="prov-status-${e.id}" style="color: ${e.status===`Healthy`?`var(--accent-success)`:`var(--accent-danger)`}; font-weight: 600;">${e.status}</span>
                  </div>
                </div>
                
                <div style="margin-top: 1rem;">
                   <div style="color: var(--text-secondary); margin-bottom: 0.5rem; font-size: 0.9rem;">Average Latency</div>
                   <div style="display: flex; align-items: baseline; gap: 0.2rem;">
                      <span id="prov-latency-${e.id}" style="font-size: 1.8rem; font-weight: 700;">${Math.floor(Math.random()*15+10)}</span>
                      <span style="color: var(--text-muted); font-size: 0.9rem;">ms</span>
                   </div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>
      
      <!-- Reports View -->
      <div id="view-reports" class="content-view" style="display: none; transition: opacity 0.3s; opacity: 0;">
        <div class="dashboard-container">
          <div class="flex-between" style="margin-bottom: 1.5rem;">
            <div>
              <h2>System Events & Reports</h2>
              <p style="color: var(--text-secondary);">Consolidated historical log of simulated actions and infrastructure events.</p>
            </div>
            <button id="btn-export-csv" class="action-btn" style="display: flex; gap: 0.5rem; align-items: center;">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
               Export CSV
            </button>
          </div>
          
          <div class="glass-panel" style="overflow: hidden;">
            <div style="overflow-x: auto;">
              <table style="width: 100%; text-align: left; border-collapse: collapse;">
                <thead>
                  <tr style="border-bottom: 1px solid var(--border-strong); background: rgba(0,0,0,0.2);">
                    <th style="padding: 1rem 1.5rem; color: var(--text-muted); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Timestamp</th>
                    <th style="padding: 1rem 1.5rem; color: var(--text-muted); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Type</th>
                    <th style="padding: 1rem 1.5rem; color: var(--text-muted); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Provider</th>
                    <th style="padding: 1rem 1.5rem; color: var(--text-muted); font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Details</th>
                  </tr>
                </thead>
                <tbody id="reports-table-body">
                  <!-- Dynamic rows added here -->
                  <tr style="border-bottom: 1px solid var(--border-light); transition: background 0.2s; cursor: default;">
                    <td style="padding: 1rem 1.5rem; font-family: monospace; font-size: 0.9rem; color: var(--text-secondary);">${new Date().toLocaleString()}</td>
                    <td style="padding: 1rem 1.5rem;"><span style="color: var(--accent-success); font-weight: 500; font-size: 0.9rem;">System Init</span></td>
                    <td style="padding: 1rem 1.5rem;">Global</td>
                    <td style="padding: 1rem 1.5rem; color: var(--text-primary); font-size: 0.9rem;">Simulation engine online and listening.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  </div>
`;var n=document.createElement(`style`);n.innerHTML=`
  @keyframes spin { 100% { transform: rotate(360deg); } }
  @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
  .action-btn { background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-strong); padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; transition: 0.2s; font-family: inherit; font-weight: 500; font-size: 0.9rem; }
  .action-btn:hover { background: var(--bg-card-hover); border-color: rgba(255,255,255,0.4); transform: translateY(-1px); }
  tbody tr:hover { background: rgba(255,255,255,0.02); }
`,document.head.appendChild(n),document.getElementById(`login-form`).addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`btn-login`);t.textContent=`Authenticating...`,t.style.opacity=`0.8`,setTimeout(()=>{document.getElementById(`login-container`).style.opacity=`0`,setTimeout(()=>{document.getElementById(`login-container`).style.display=`none`;let e=document.getElementById(`app-container`);e.style.display=`flex`,e.offsetWidth,e.style.opacity=`1`,s()},300)},600)}),document.getElementById(`btn-logout`).addEventListener(`click`,()=>{let e=document.getElementById(`app-container`);e.style.opacity=`0`;let t=document.getElementById(`profile-dropdown`);t&&(t.style.opacity=`0`,t.style.display=`none`),setTimeout(()=>{e.style.display=`none`;let t=document.getElementById(`login-container`);t.style.display=`flex`,document.getElementById(`btn-login`).textContent=`Sign In`,document.getElementById(`btn-login`).style.opacity=`1`,document.getElementById(`login-form`).reset(),t.offsetWidth,t.style.opacity=`1`},500)}),document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>e.classList.remove(`active`)),e.target.classList.add(`active`);let t=e.target.getAttribute(`data-view`);document.querySelectorAll(`.content-view`).forEach(e=>{e.style.opacity=`0`,setTimeout(()=>{e.style.display=`none`,e.classList.remove(`active`)},150)}),setTimeout(()=>{let e=document.getElementById(`view-${t}`);e&&(e.style.display=`block`,setTimeout(()=>{e.style.opacity=`1`,e.classList.add(`active`),t===`dashboard`&&s()},50))},150)})});var r=!0,i=2200,a=document.getElementById(`toggle-sim-btn`);a.addEventListener(`click`,()=>{r=!r,a.textContent=r?`Resume Traffic`:`Pause Traffic`;let e=document.querySelector(`.status-indicator`);r?(e.classList.add(`status-active`),e.style.background=`var(--accent-success)`,e.style.boxShadow=`0 0 8px var(--accent-success)`,document.querySelector(`.context-info`).nextElementSibling.querySelector(`span`).textContent=`Simulation Active`):(e.classList.remove(`status-active`),e.style.background=`var(--text-muted)`,e.style.boxShadow=`none`,document.querySelector(`.context-info`).nextElementSibling.querySelector(`span`).textContent=`Simulation Paused`)});function o(e,t=`info`){let n=document.getElementById(`event-log`),r=new Date().toLocaleTimeString(),i=`var(--text-secondary)`,a=`Info`,o=`Global`;if(t===`warn`&&(i=`var(--accent-warning)`,a=`Warning`),t===`error`&&(i=`var(--accent-danger)`,a=`Critical`),t===`success`&&(i=`var(--accent-success)`,a=`Success`),e.includes(`AWS`)&&(o=`AWS`),e.includes(`Azure`)&&(o=`Azure`),e.includes(`GCP`)&&(o=`GCP`),n){let t=document.createElement(`div`);t.innerHTML=`<span style="color: var(--text-muted);">[${r}]</span> <span style="color: ${i}">${e}</span>`,t.style.padding=`0.4rem 0.6rem`,t.style.background=`rgba(0,0,0,0.2)`,t.style.borderRadius=`4px`,t.style.borderLeft=`2px solid ${i}`,n.prepend(t),n.children.length>7&&n.removeChild(n.lastChild)}let s=document.getElementById(`reports-table-body`);if(s){let t=document.createElement(`tr`);t.style.borderBottom=`1px solid var(--border-light)`,t.style.transition=`background 0.2s`,t.innerHTML=`
      <td style="padding: 1rem 1.5rem; font-family: monospace; font-size: 0.9rem; color: var(--text-secondary);">${new Date().toLocaleString()}</td>
      <td style="padding: 1rem 1.5rem;"><span style="color: ${i}; font-weight: 500; font-size: 0.9rem;">${a}</span></td>
      <td style="padding: 1rem 1.5rem; font-size: 0.9rem;">${o}</td>
      <td style="padding: 1rem 1.5rem; color: var(--text-primary); font-size: 0.9rem;">${e}</td>
    `,s.prepend(t)}}document.getElementById(`btn-outage`).addEventListener(`click`,()=>{let n=e.find(e=>e.id===`azure`);n.status=`Offline`,n.cpu=0,n.mem=0,n.instances=0;let r=document.querySelector(`.provider-card-azure`);r&&(r.style.opacity=`0.4`);let i=document.querySelector(`.azure-node-indicator`);i&&(i.style.background=`var(--text-muted)`),o(`Azure EU-West region offline. Routing traffic away.`,`error`),t=1.4,setTimeout(()=>{n.status=`Healthy`,n.instances=15,r&&(r.style.opacity=`1`),i&&(i.style.background=`var(--accent-azure)`),o(`Azure region recovered and syncing.`,`success`),t=1},2e4)}),document.getElementById(`btn-ddos`).addEventListener(`click`,()=>{let t=e.find(e=>e.id===`aws`);t.cpu=99,o(`Massive inbound traffic targeting AWS ALB! Possible DDoS.`,`warn`)}),document.getElementById(`btn-surge`).addEventListener(`click`,()=>{t=1.6,o(`Global traffic surge initiated. Scaling systems.`,`info`),setTimeout(()=>{t=1,o(`Traffic returning to normalized baselines.`,`success`)},15e3)}),o(`Connected to region US-East (AWS)`),o(`Connected to region EU-West (Azure)`);function s(){let t=document.getElementById(`resource-chart`);if(!t)return;let n=t.clientWidth||800;t.innerHTML=`
    <svg width="100%" height="200" viewBox="0 0 ${n} 200" preserveAspectRatio="none" style="overflow: visible;">
      <line x1="0" y1="${200/4}" x2="${n}" y2="${200/4}" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="${200/2}" x2="${n}" y2="${200/2}" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="${200*.75}" x2="${n}" y2="${200*.75}" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="200" x2="${n}" y2="200" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
      
      ${e.map(e=>`<path d="${e.cpuHistory.map((e,t)=>{let r=t/19*n,i=200-e/100*200;return`${t===0?`M`:`L`} ${r} ${i}`}).join(` `)}" fill="none" stroke="${e.color}" stroke-width="2" style="filter: drop-shadow(0 0 5px ${e.color}); transition: d 0.5s linear;" />`).join(``)}
    </svg>
    <div class="flex-center" style="margin-top: 1.5rem; gap: 1.5rem; font-size: 0.8rem; color: var(--text-secondary);">
      ${e.map(e=>`
        <div class="flex-center" style="gap: 0.4rem;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: ${e.color}; box-shadow: 0 0 5px ${e.color};"></span>
          <span>${e.name} Avg CPU</span>
        </div>
      `).join(``)}
    </div>
  `}function c(){if(!r)return;e.forEach(e=>{if(e.status===`Offline`){e.cpuHistory.push(0),e.cpuHistory.shift(),[`prov-instances`,`prov-status`,`prov-latency`,`prov-indicator`].forEach(t=>{let n=document.getElementById(`${t}-${e.id}`);n&&((t===`prov-instances`||t===`prov-latency`)&&(n.textContent=`0`),t===`prov-status`&&(n.textContent=`Offline`,n.style.color=`var(--accent-danger)`),t===`prov-indicator`&&(n.style.background=`var(--accent-danger)`,n.style.boxShadow=`0 0 8px var(--accent-danger)`))});return}let n=(Math.random()*14-7)*t;t>1&&e.cpu<90&&(n=Math.abs(n)),e.cpu=Math.min(100,Math.max(10,e.cpu+n)),e.mem=Math.min(100,Math.max(20,e.mem+(Math.random()*8-4))),e.cpuHistory.push(e.cpu),e.cpuHistory.shift();let r=document.getElementById(`${e.id}-cpu-text`);if(r&&(r.textContent=Math.round(e.cpu)+`%`,document.getElementById(`${e.id}-cpu-bar`).style.width=Math.round(e.cpu)+`%`,document.getElementById(`${e.id}-mem-text`).textContent=Math.round(e.mem)+`%`,document.getElementById(`${e.id}-mem-bar`).style.width=Math.round(e.mem)+`%`),Math.random()>.9||t>1&&Math.random()>.6){Math.random()>.4||e.cpu>80?(e.instances+=Math.floor(Math.random()*3)+1,o(`[${e.name}] High load. Auto-scaled UP.`,`info`)):e.instances>5&&e.cpu<40&&--e.instances;let t=document.getElementById(`${e.id}-instances`);t&&(t.textContent=e.instances,t.style.transform=`scale(1.2)`,setTimeout(()=>t.style.transform=`scale(1)`,200))}let i=document.getElementById(`prov-instances-${e.id}`);i&&(i.textContent=e.instances);let a=document.getElementById(`prov-status-${e.id}`);a&&(a.textContent=`Healthy`,a.style.color=`var(--accent-success)`);let s=document.getElementById(`prov-indicator-${e.id}`);s&&(s.style.background=`var(--accent-success)`,s.style.boxShadow=`0 0 8px var(--accent-success)`);let c=document.getElementById(`prov-latency-${e.id}`);if(c){let t=e.id===`aws`?12:e.id===`azure`?18:22;c.textContent=Math.floor(t+Math.random()*5+e.cpu/20)}});let n=document.getElementById(`view-dashboard`);n&&n.style.display!==`none`&&n.style.opacity!==`0`&&s()}window.addEventListener(`resize`,()=>{let e=document.getElementById(`view-dashboard`);e&&e.style.display!==`none`&&s()}),setInterval(c,i),document.addEventListener(`click`,e=>{if(!e.target.closest(`#btn-export-csv`))return;let t=document.getElementById(`reports-table-body`);if(!t)return;let n=t.querySelectorAll(`tr`),r=`Timestamp,Type,Provider,Details
`;n.forEach(e=>{let t=e.querySelectorAll(`td`);if(t.length){let e=Array.from(t).map(e=>`"${e.innerText.replace(/"/g,`""`)}"`);r+=e.join(`,`)+`
`}});let i=new Blob([r],{type:`text/csv;charset=utf-8;`}),a=URL.createObjectURL(i),o=document.createElement(`a`);o.setAttribute(`href`,a),o.setAttribute(`download`,`cloudsim_report_${new Date().toISOString().replace(/[:.]/g,`-`)}.csv`),o.style.display=`none`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)}),document.addEventListener(`click`,e=>{let t=document.getElementById(`profile-dropdown`);if(!t)return;let n=e.target.closest(`#btn-profile`),r=e.target.closest(`#profile-dropdown`);n?t.style.display===`none`?(t.style.display=`flex`,setTimeout(()=>t.style.opacity=`1`,10)):(t.style.opacity=`0`,setTimeout(()=>t.style.display=`none`,200)):r||t.style.display!==`none`&&(t.style.opacity=`0`,setTimeout(()=>t.style.display=`none`,200))}),document.addEventListener(`change`,e=>{e.target.id===`env-select`&&(o(`Environment switched to ${e.target.options[e.target.selectedIndex].text}`,`info`),t=e.target.value===`prod`?1:e.target.value===`staging`?.7:.4)});