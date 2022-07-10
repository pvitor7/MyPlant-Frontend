<ContainerPlants>
        <div className="divButtons">
          <button onClick={() => setColor(null)}>Todas</button>
          {colors.map(({ value, label }) => {
            return (
              <span key={value}>
                {hasColor(value) && (
                  <button onClick={() => setColor(value)}>{label}</button>
                )}
              </span>
            );
          })}
        </div>

        <ul className="divCards">
          {plants.length === 0 ? (
            <p>Não existe "{input}" no banco de dados.</p>
          ) : (
            plants?.map((a, index) => {
              return (
                <MyPot
                  setIdPlantComment={setIdPlantComment}
                  onComment={setInputComment}
                  homePage
                  key={index}
                  plant={a}
                />
              );
            })
          )}
        </ul>
      </ContainerPlants>