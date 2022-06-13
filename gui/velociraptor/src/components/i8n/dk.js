import Alert from 'react-bootstrap/Alert';
import humanizeDuration from "humanize-duration";

const Danish = {
    SEARCH_CLIENTS: "Søg Klienter",
    "Quarantine description": <>
          <p>Du er ved at sætte denne vært i karentæne.</p>
          <p>
           Når værten er i karentæne, 
           vil den ikke være i stand til at kommunikere med andre netværk, 
           pånær Velociraptor serveren.
          </p>
                              </>,
    "Cannot Quarantine host": "Kan ikke sætte vært i karentæne",
    "Cannot Quarantine host message": (os_name, quarantine_artifact)=>
        <>
          <Alert variant="warning">
            { quarantine_artifact ?
              <p>Denne Velociraptor instans har ikke <b>{quarantine_artifact}</b> den nødvendige artefakt til at kunne sætte værter i karentæne, der kører {os_name}.</p> :
              <p>Denne Velociraptor instans har ikke et artefakt navn defineret til at kunne sætte værter i karentæne, som kører {os_name}.</p>
            }
          </Alert>
        </>,
    "Client ID": "Klient ID",
    "Agent Version": "Agent Version",
    "Agent Name": "Agent Navn",
    "First Seen At": "Første Gang Set",
    "Last Seen At": "Sidste Gang Set",
    "Last Seen IP": "Sidst Set IP",
    "Labels": "Mærker",
    "Operating System": "Operativ System",
    "Hostname": "Værtsnavn",
    "FQDN": "FQDN",
    "Release": "Udgivelse",
    "Architecture": "Arkitektur",
    "Client Metadata": "Klient Metadata",
    "Interrogate": "Forhør",
    "VFS": "VFS",
    "Collected": "Indsamlet",
    "Unquarantine Host": "Sæt vært ud af karentæne",
    "Quarantine Host": "Sæt vært i karentæne",
    "Add Label": "Tilføj Mærke",
    "Overview": "Overblik",
    "VQL Drilldown": "VQL Detaljer",
    "Shell": "Shell",
    "Close": "Luk ned",
    "Connected": "Forbundet",
    "time_ago": (value, unit) => {
        return value + ' ' + unit + ' siden';
    },
    "DeleteMessage": "Du er ved at slette følgende klienter permanent",
    "You are about to delete": name=>"Du er ved at slette "+name,
    "Edit Artifact": name=>{
        return "Rediger artefakt " + name;
    },
    "Notebook for Collection": name=>"Notesbog for Indsamlingen "+name,
    "ArtifactDeletionDialog": (session_id, artifacts, total_bytes, total_rows)=>
    <>
      Du er ved at slette artefakt indsamlingen permanent
      <b>{session_id}</b>.
      <br/>
      Denne indsamling havde følgende artefakter <b className="wrapped-text">
                                          {artifacts}</b>
      <br/><br/>

      Vi regner med at kunne frigive { total_bytes.toFixed(0) } Mb af bulk
      data og { total_rows } rækker.
    </>,
    "ArtifactFavorites": artifacts=>
    <>
      Du kan nemt indsamle den samme indsamling fra dine 
      favoriter i fremtiden.
      <br/>
      Denne indsamling indholdte artefakterne <b>{artifacts}</b>
      <br/><br/>
    </>,
    "DeleteHuntDialog": <>
                    <p>Du er ved at stoppe og slette alt data fra denne jagt permanent.</p>
                    <p>Er du sikker på at du vil annullere denne jagt og slette alt indsamlet data?</p>
                        </>,
    "Notebook for Hunt": hunt_id=>"Notesbog for Jagt " + hunt_id,
    "RecursiveVFSMessage": path=><>
       Du er ved at indhente alle filer rekursivt i <b>{path}</b>.
       <br/><br/>
        Dette kan forårsage store overførsler af data fra værten. Pr. standard er upload grænsen 1gb men du kan ændre dette i Indsamlet Artefakter menupunktet.
     </>,
    "ToolLocalDesc":
    <>
      Tool will be served from the Velociraptor server
      to clients if needed. The client will
      cache the tool on its own disk and compare the hash next
      time it is needed. Tools will only be downloaded if their
      hash has changed.
    </>,
    "ServedFromURL": (base_path, url)=>
    <>
      Clients will fetch the tool directly from
      <a href={base_path + url}>{url}</a> if
      needed. Note that if the hash does not match the
      expected hash the clients will reject the file.
    </>,
    "ServedFromGithub": (github_project, github_asset_regex)=>
    <>
      Tool URL will be refreshed from
      GitHub as the latest release from the project
      <b>{github_project}</b> that matches
      <b>{github_asset_regex}</b>
    </>,
    "PlaceHolder":
    <>
      Tool hash is currently unknown. The first time the tool
      is needed, Velociraptor will download it from it's
      upstream URL and calculate its hash.
    </>,
    "ToolHash":
    <>
      Tool hash has been calculated. When clients need to use
      this tool they will ensure this hash matches what they
      download.
    </>,
    "AdminOverride":
    <>
      Tool was manually uploaded by an
      admin - it will not be automatically upgraded on the
      next Velociraptor server update.
    </>,
    "ToolError":
    <>
      Tool's hash is not known and no URL
      is defined. It will be impossible to use this tool in an
      artifact because Velociraptor is unable to resolve it. You
      can manually upload a file.
    </>,
    "OverrideToolDesc":
    <>
      As an admin you can manually upload a
      binary to be used as that tool. This will override the
      upstream URL setting and provide your tool to all
      artifacts that need it. Alternative, set a URL for clients
      to fetch tools from.
    </>,
    "X per second": x=><>{x} per second</>,
    "HumanizeDuration": difference=>{
        if (difference<0) {
            return <>
                     In {humanizeDuration(difference, {
                         round: true,
                         language: "en",
                     })}
                   </>;
        }
        return <>
                 {humanizeDuration(difference, {
                     round: true,
                     language: "en",
                 })} ago
               </>;
    },
    "EventMonitoringCard":
    <>
      Event monitoring targets specific label groups.
      Select a label group above to configure specific
      event artifacts targetting that group.
    </>,
    "_ts": "Server Time",
    "TablePagination": (from, to, size)=>
    <>Showing { from } to { to } of { size }</>,

};

export default English;
