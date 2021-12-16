import React from 'react';
import { AreaHeader } from './styled';

function Herder(){
    return(
        
      <AreaHeader>
        <div className="container">
          <div className="logo">
              LOGOMARCA
          </div>
          <nav>
              <ul>
                  <li>Configuração</li>
                  <li>Sair</li>
              </ul>
          </nav>
        </div>
      </AreaHeader>
        
    );
}

export default Herder;