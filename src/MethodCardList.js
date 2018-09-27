import React from "react";
import MethodCard from "./MethodCard";
import MethodList from "./methods.json";

class MethodCardList extends React.Component {
  render() {
    return (
      <div className="search">
        {MethodList.map(uxm => {
          return (
            <MethodCard
              key={uxm.unique}
              id={uxm.id}
              unique={uxm.unique}
              title={uxm.title}
              description={uxm.description}
              stages={uxm.stages}
              ratings={uxm.ratings}
              time={uxm.time}
              ms={uxm.ms}
              participants={uxm.participants}
              basics={uxm.basics}
              keywords={uxm.keywords}
              instructions={uxm.instructions}
              documents={uxm.documents}
            />
          );
        })}
      </div>
    );
  }
}
export default MethodCardList;
