import EntityForm from "./EntityForm";
import Timeline from "./Timeline";
import EntityIndex from "./EntityIndex";
import "./MainPage.css";
import { useState } from "preact/hooks";

const MainPage = ({ entities, startYear, endYear }) => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const handleSelectEntity = entityId =>
    setSelectedEntity(entities.find(entity => entity.id === entityId) || null);

  const deselectEntity = () => setSelectedEntity(null);

  return (
    <main
      style={{
        "--timeline-start": startYear,
        "--timeline-end": endYear,
      }}
      onKeyDown={event =>
        event.key.toLowerCase() === "escape" && deselectEntity()
      }
    >
      {selectedEntity && (
        <EntityForm
          selectedEntity={selectedEntity}
          onRequestClose={deselectEntity}
        />
      )}
      <div className="entity-lists">
        <Timeline
          start={startYear}
          end={endYear}
          entities={entities}
          increment={1}
          onSelect={handleSelectEntity}
        />
        <EntityIndex entities={entities} onSelect={handleSelectEntity} />
      </div>
    </main>
  );
};

export default MainPage;
