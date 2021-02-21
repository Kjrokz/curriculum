import React from "react"

/* import CV from "../images/cv.pdf" */

import { Container, Button } from "react-bootstrap"

import "./Sass/SobreMi.scss"

export interface SobreMiProps {}

const SobreMi: React.FC<SobreMiProps> = () => {
  return (
    <>
      <Container className="sobre-mi">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          nulla amet, quo veritatis nihil porro quaerat accusantium temporibus
          aut soluta dolorum iusto reiciendis iure quos cumque eius impedit
          unde! Molestias. Eum voluptates delectus dolores soluta recusandae,
          odio porro dolorem impedit nemo libero debitis labore possimus
          voluptatum molestias quam, ullam sunt perferendis dolore, illo cum hic
          id ab repudiandae. Accusantium, eum. Atque molestias ipsa praesentium
          error, esse qui fugiat officiis possimus nemo necessitatibus a
          incidunt dolores magni numquam optio quibusdam laborum deleniti ullam
          dolore dignissimos aliquid tempore? Officia labore porro cupiditate?
          Aliquam, earum. Esse voluptatum enim eaque, quam atque optio quod
          omnis pariatur deleniti rem asperiores mollitia qui odit, fuga hic
          quisquam sint vero fugit? Dolor minima id excepturi sunt earum? Quas
          fugiat id accusantium dolore! Delectus natus enim illum aut vero a
          eaque amet possimus, mollitia dolor et debitis aliquid necessitatibus
          provident sed numquam est voluptates excepturi! Dolores, velit sunt?
          Ipsum id, quisquam debitis dolorum unde ratione corrupti eum voluptate
          tempore aut. Odio incidunt ullam numquam laboriosam doloribus eius
          unde reiciendis voluptas, corporis, quibusdam deserunt. Commodi illo
          aliquam iste error! Alias sit porro neque delectus molestias autem
          rerum quia doloribus facilis esse ratione doloremque numquam possimus
          quod, perferendis amet aut itaque nihil minus nobis praesentium
          eveniet similique. Qui, quisquam nemo. Iure eum magni impedit
          provident ducimus recusandae placeat incidunt? Molestiae minima
          aliquid, aliquam magnam libero omnis temporibus voluptatem mollitia
          blanditiis inventore quam praesentium ducimus exercitationem.
          Temporibus tempore quam vitae qui? Quos veniam mollitia nam accusamus
          iusto numquam amet neque natus? Animi, facilis officiis ullam
          excepturi nihil nam exercitationem. Voluptatibus cupiditate,
          exercitationem iste hic quo ratione sit perspiciatis reiciendis harum
          voluptas! Inventore ipsum quos illo, nostrum, sunt reprehenderit iure,
          ullam maiores corrupti minus quam ut enim deleniti veniam eum
          repellendus ab aliquam impedit? Numquam tempore nostrum dolorum illo
          ea nulla animi.
        </p>
        {/* <div>
          <Button>Descargar CV</Button>
        </div> */}
        <a href={require("../images/cv.pdf")} target="_blank">
          <Button>Descargar CV</Button>
        </a>
      </Container>
    </>
  )
}

export default SobreMi
