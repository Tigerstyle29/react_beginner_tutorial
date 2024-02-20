import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
    const [modal, setModal] = useState(false)
    
    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laborum ex officiis quasi quaerat! 
                Quibusdam architecto dignissimos inventore voluptate? 
                Sequi aliquam temporibus suscipit delectus illo inventore repudiandae reprehenderit quod, e
                xpedita ipsam?</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>
        </section>
    )
}