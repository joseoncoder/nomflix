import React from "react";
import styled from "styled-components";
import Poster from "Components/Poster";

class DetailTab extends React.Component {
  render() {
    const isMovie = this.props.isMovie;
    const Trailers = this.props.result.videos.results;
    const Collection = this.props.collection;
    const Season = this.props.season;
    const ProductionInfo = this.props.result.production_companies;

    const Image = styled.div`
      background-image: url(${props => props.bgUrl});
      margin: 25px;
      height: 152px;
      width: 300px;
      background-size: 100% 100%;
      border-radius: 4px;
      backgoround-position: center center;
      text-align: center;
      align-content: center;
      align-items: center;
    `;

    const TabContainer = styled.div``;
    const TrailerItems = styled.div`
      height: calc(100vh - 340px);
      overflow: scroll;
    `;
    const TrailerVideo = styled.iframe`
      width: 90%;
      height: 80%;
      margin-bottom: 50px;
    `;

    const CollectionGrid = styled.div`
      height: calc(100vh - 340px);
      margin-top: 25px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 125px);
      grid-gap: 25px;
      overflow: scroll;
    `;
    const ProductGrid = styled.div`
      height: calc(100vh - 340px);
      display: grid;
      grid-template-columns: repeat(auto-fill, 310px);
      grid-gap: 25px;
      overflow: scroll;
    `;

    return (
      <TabContainer className="tabs">
        <Tabs>
          <Tab label="Trailer">
            <TrailerItems>
              {Trailers &&
                Trailers.map((trailer, index) => (
                  <TrailerVideo
                    key={`${index}`}
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                  />
                ))}
            </TrailerItems>
          </Tab>
          {(Collection || Season) && (
            <Tab label={isMovie ? "Collection" : "Season"}>
              <CollectionGrid>
                {isMovie
                  ? Collection &&
                    Collection.parts &&
                    Collection.parts.map(collection => (
                      <Poster
                        key={collection.id}
                        id={collection.id}
                        title={collection.title}
                        imageUrl={collection.poster_path}
                        rating={collection.vote_average}
                        year={
                          collection.release_date &&
                          collection.release_date.substring(0, 4)
                        }
                        isMovie={true}
                        target={true}
                      />
                    ))
                  : Season &&
                    Season.map(season => (
                      <Poster
                        key={season.id}
                        id={this.props.result.id}
                        title={season.name}
                        imageUrl={season.poster_path}
                        rating={season.vote_average}
                        year={
                          season.air_date && season.air_date.substring(0, 4)
                        }
                        isMovie={false}
                        disabled={true}
                      />
                    ))}
              </CollectionGrid>
            </Tab>
          )}

          <Tab label="Production">
            <ProductGrid>
              {ProductionInfo.length > 0 &&
                ProductionInfo.map(pInfo =>
                  pInfo.logo_path ? (
                    <div>
                      <Image
                        bgUrl={`https://image.tmdb.org/t/p/original${pInfo.logo_path}`}
                      />
                    </div>
                  ) : (
                    <div>
                      <Image>{pInfo.name}</Image>
                    </div>
                  )
                )}
            </ProductGrid>
          </Tab>
        </Tabs>
      </TabContainer>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label
  };
  changeTab = tab => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child => {
          if (child !== null) {
            buttons.push(child.props.label);
            if (child.props.label === this.state.activeTab)
              content = child.props.children;
          }
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = props => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default DetailTab;
