import React from 'react';
import Icons from '../../components/footer/Icons';
import './hayday.scss';
export default function Hayday() {
  return (
    <div className="hayday">
      <div className="hayday__cover"></div>
      <div className="hayday__section1">
        <span className="section1__cover"></span>
        <div className="hayday__section1__details">
          <h1>FARM WITH FRIENDS AND FAMILY</h1>
          <p>
            You don’t have to be from a farm to be a great farmer. Hay Day lets
            you get back to nature and experience the simple life of working the
            land. It’s a special game set in a real special place. Food grows
            free, people smile and the animals are always happy to see you. It
            never rains here, but the crops never die. And if you’re craving a
            little bacon, one of the pigs will be happy to fry some up for you.
            After all, what are pigs... oops, we mean neighbors for?
          </p>
          <div className="section1__icons">
            <img src="unnamed.png" alt="" />
            <img src="unnamed (1).png" alt="" />
            <img src="unnamed (2).png" alt="" />
            <img src="unnamed.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="hayday__section2">
        <div class="large-8 columns grid-system-row">
          <div class="row">
            <div id="timeline">
              <article
                class="node node-article-content m-timeline "
                typeof="sioc:Item foaf:Document"
                role="article"
              >
                <div class="content">
                  <div class="field field-name-field-content field-type-text-long field-label-hidden">
                    <div class="large-8 columns grid-system-column introtext">
                      <div class="mobile-8 large-6 columns grid-system-column">
                        <h2>Constantly Evolving</h2>
                        <p>
                          <em>Hay Day</em> has been constantly evolving to offer
                          more user-friendly, consistent and fun online
                          experiences for Supercell gamers. There have been
                          countless updates since the game launched in 2012.
                        </p>
                      </div>
                    </div>
                    <div class="large-8 columns grid-system-column chart">
                      <div class="scroll-container">
                        <div class="timeline-block medium">
                          <div class="title icon-launch animate">
                            <span>Global Launch</span>
                          </div>
                          <div class="time">2012</div>
                        </div>
                        <div class="timeline-block medium">
                          <div class="title animate">
                            <span>Fishing</span>
                          </div>
                          <div class="time">&nbsp;</div>
                        </div>
                        <div class="timeline-block medium">
                          <div class="title animate">
                            <span>Neighborhoods</span>
                          </div>
                          <div class="time">&nbsp;</div>
                        </div>
                        <div class="timeline-block medium">
                          <div class="title animate">
                            <span>Town Update</span>
                          </div>
                          <div class="time">&nbsp;</div>
                        </div>
                        <div class="timeline-block medium">
                          <div class="title animate">
                            <span>Derby Leagues</span>
                          </div>
                          <div class="time">&nbsp;</div>
                        </div>
                        <div class="timeline-block short">
                          <div class="title animate">
                            <span>The Builder</span>
                          </div>
                          <div class="time">&nbsp;</div>
                        </div>
                        <div class="timeline-block long inactive">
                          <div class="title animate"></div>
                          <div class="time">Today</div>
                        </div>
                        <div class="scroll-tip"></div>
                      </div>
                    </div>
                    <div class="game-screen animate"></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="hayday__section3">
        <div className="section3__cover">
          <img src="bg_gamewebsite_hayday.png" alt="" />
          <div className="section3__details">
            <h1>STAY UP-TO-DATE</h1>
            <p>
              To stay on top of your game, keep an eye on the in-game News
              section. Follow us on social media for the latest chatter and
              sneak peeks on what the team is working on. Don’t be a stranger
              and join the conversation.
            </p>
            <h6>FOLLOW HAY DAY ON</h6>
            <div className="section3__icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>

      <div className="hayday__carosel"></div>
    </div>
  );
}
